class Sprite(){
	private readonly image: Image;
	private readonly dim: Vector2D;
	private readonly animationFrames: number;
	private currentAnimation: number;

	constructor(image: Image, 
		rows: number){
		this.image = image;
		this.dim.x = image.width / rows;	
		this.dim.y = image.height / 4; 		// 4 different directions
		this.animationFrames = rows;
		this.currentAnimation = 0;
	}

	public draw(ctx: CanvasRenderingContext2D, pos: Vector2D){
		//
		ctx.drawImage(this.sprite, this.pos.x, this.pos.y);
	}

}