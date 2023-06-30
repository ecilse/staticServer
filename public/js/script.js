let playerState = 'fall'
let dropdown = document.getElementById('controls')
dropdown.addEventListener('change', e => {
  playerState = e.target.value
})

// 获取canvas对象
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

// 获取设置canvas元素宽高
const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

// 单张图片大小
const spriteWidth = 575
const spriteHeight = 523


const playerImage = new Image()
playerImage.src = "/image/shadow_dog.png"

let gameFrames = 0
const staggerFrames = 5
const spriteAnimations = []
const animationStates = [
  {
    name: 'idle',
    frames: 7
  },{
    name: 'jump',
    frames: 7
  },{
    name: 'fall',
    frames: 7
  },{
    name: 'run',
    frames: 9
  },{
    name: 'dizzy',
    frames: 11
  },{
    name: 'sit',
    frames: 5
  },{
    name: 'roll',
    frames: 7
  },{
    name: 'bite',
    frames: 7
  },{
    name: 'ko',
    frames: 12
  },{
    name: 'gitHit',
    frames: 4
  }
]

animationStates.forEach((state, index) => {
  let frames = {
    loc: []
  }
  for(let j = 0 ; j < state.frames; j++) {
    let positionX = j * spriteWidth
    let positionY = index * spriteHeight
    frames.loc.push({x: positionX, y: positionY})
  }
  spriteAnimations[state.name] = frames
})

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  // ctx.fillRect(100, 50, 100, 100)
  let position = Math.floor(gameFrames/staggerFrames) % spriteAnimations[playerState].loc.length
  let frameX = position * spriteWidth
  let frameY = spriteAnimations[playerState].loc[position].y
  ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  // if(frameX < 6) frameX++
  // else frameX = 0
  // requestAnimationFrame()
  gameFrames++
  requestAnimationFrame(animate)
}
animate()