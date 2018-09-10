class Entity{

	private pos: Vector2D;
	private dim: Vector2D;
	private velocity: number;
	private rot: number;
	private sprite: sprite;

	/**	
	 *	This is the constructor
	 */
	constructor(pos: Vector2D = new Vector2D(0, 0),
		dim: Vector2D = new Vector2D(1, 1),
		velocity: number = 1,
		rot: number = 0,
		image: ImageBitmap){
		this.pos = pos;
		this.dim = dim;
		this.velocity = velocity;
		this.rot = rot;
		this.sprite = new Sprite(image);
	}

	public update(time: number){
		this.pos.x += Math.sin(this.rot) * this.velocity * time;
		this.pos.y += Math.cos(this.rot) * this.velocity * time;
	}

	public draw(ctx: CanvasRenderingContext2D){
		this.sprite.draw(ctx, this.pos);
	}
}