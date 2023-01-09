/**
 * @license GPL-3.0
 * @author Paul BONCAR <contact.nocteria@gmail.com>
 * @description Create your game with HTML and JavaScript!
 * @version 1.0.0
 */

export class Game {
  public static gameSpeed: number = 10;

  public static setGameSpeed(_speed: number) {
    this.gameSpeed = _speed;
  }
}

export class ConstructionError implements Error {
  message: string;
  name: string;

  error = new Error();

  // ==================================================

  constructor(_name: string, _message: string) {
    this.error.name = _name;
    this.error.message = _message;

    throw this.error;
  }
}

export class Entity {
  private id: string;
  private displayName: string;

  private hitboxWidth: number = 0;
  private hitboxHeight: number = 0;

  private location = {
    x: 0,
    y: 0,
  };

  private moveSpeed: number = 0.1 * Game.gameSpeed;

  // ==================================================

  public setLocation(_x, _y): void {
    this.location.x = _x;
    this.location.y = _y;
  }

  public setHitboxSize(_width: number, _height: number) {
    this.hitboxWidth = _width;
    this.hitboxHeight = _height;
  }

  public setDisplayName(_name: string) {
    this.displayName = _name;
  }

  // ==================================================

  constructor(_id: string) {
    this.id = _id;
  }

  // ==================================================

  public getHitBoxSize(): { width: number; height: number } {
    return { width: this.hitboxWidth, height: this.hitboxHeight };
  }

  public getDisplayName(): string {
    return this.displayName;
  }

  public getLocation(): { x: number; y: number } {
    return this.location;
  }

  // ==================================================

  public move(_x, _y): void {
    this.location.x += _x * this.moveSpeed;
    this.location.y += _y * this.moveSpeed;
  }
}

class Player extends Entity {
  constructor() {
    super("player");
  }
}
