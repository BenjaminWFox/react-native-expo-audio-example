import AudioLoader from './AudioLoader'

export const getRandomInt = function getRandomInt(pMin, pMax) {
  const min = Math.ceil(pMin)
  const max = Math.floor(pMax)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default class AudioPlayer {
  constructor() {
    this.ready = false
    this.sounds = undefined
    this.totalNotes = undefined
    this.lastSoundIndexPlayed = undefined
  }

  async init() {
    const audioLoader = new AudioLoader()

    await audioLoader.init()

    this.sounds = audioLoader.sounds
    this.totalNotes = this.sounds.length
    this.ready = true
    
    console.log('Audio loader complete. Total loaded sounds:', this.sounds.length)
  }

  playSound = () => {
    let indexToPlay = getRandomInt(0, this.totalNotes - 1)

    while (indexToPlay === this.lastSoundIndexPlayed) {
      indexToPlay = getRandomInt(0, this.totalNotes - 1)
    }

    this.lastSoundIndexPlayed = indexToPlay

    this.sounds[indexToPlay].sound.playFromPositionAsync(100).then(() => {
      console.log('Successfully played sound index', indexToPlay)
      console.log(this.sounds[indexToPlay])
      console.log('')
      // eslint-disable-next-line
    }).catch((err) => {
      // Errors attempting to play the sounds will be caught here
      // ...typically sound not loaded on android
      console.log('Error playing sound index', indexToPlay)
      console.error(err)
      console.log('')
    })
  }
}