import { Audio } from 'expo'

const c2 = require('./assets/audio/c2.mp3')
const d2 = require('./assets/audio/d2.mp3')
const e2 = require('./assets/audio/e2.mp3')
const f2 = require('./assets/audio/f2.mp3')
const g2 = require('./assets/audio/g2.mp3')
const a3 = require('./assets/audio/a3.mp3')
const b3 = require('./assets/audio/b3.mp3')
const c3 = require('./assets/audio/c3.mp3')
const d3 = require('./assets/audio/d3.mp3')
const e3 = require('./assets/audio/e3.mp3')
const f3 = require('./assets/audio/f3.mp3')
const g3 = require('./assets/audio/g3.mp3')
const a4 = require('./assets/audio/a4.mp3')
const b4 = require('./assets/audio/b4.mp3')
const c4 = require('./assets/audio/c4.mp3')

class AudioLoader {
  constructor() {
    this.rawSoundPaths = [c2, d2, e2, f2, g2, a3, b3, c3, d3, e3, f3, g3, a4, b4, c4]
    this.completedLoads = 0
    // this.complete = false
    this.sounds = []
    this.initialPBStatus = {
      shouldPlay: false,
    }
  }

  async init() {
    await Promise.all(this.rawSoundPaths.map((soundPath) => this.loadSound(soundPath)))
  }

  async loadSound(soundPath) {
    return Audio.Sound.createAsync(soundPath, this.initialPBStatus, null, false)
      .then((soundObject) => {
        this.sounds.push(soundObject)
        // console.log('Sound object loaded:', this.sounds.length - 1, soundObject.sound._loaded, soundObject)
        console.log('SO Loaded')

        // this.loadCompleted()
      })
      .catch(async (error) => {
        // console.log('Failed to load sound:', error)
        console.log('Failed SO Loaded. Reloading...')
        await this.loadSound(soundPath)
        // this.loadCompleted()
      })
  }
}

export default AudioLoader
