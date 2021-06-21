const canvas = document.querySelector("#canvas")
canvas.style.backgroundColor = 'Lightgray'
const ctx = canvas.getContext('2d')
ctx.fillStyle = 'yellow'
ctx.fillRect(10, 20, 50, 70)

ctx.font = `$20px Arial`
ctx.fillStyle = 'blue'
ctx.textAlign = 'center'
ctx.textBaseline = 'middle'
ctx.fillText('Hello, World', 50, 70)

ctx.strokeStyle = 'lightblu'
ctx.linewidth = 5
ctx.strokeRect(10, 20, 50, 70)


ctx.strokeStyle = 'purple'
	ctx.linewidth = 5
	ctx.beginPath()
	ctx.moveTo(10, 10)
	ctx.lineTo(290, 10)
	ctx.lineTo(10, 290)
	ctx.stroke()
