export interface Vec2 {
    x: number;
    y: number;
}

export interface Transform {
    translate: Vec2;
    rotate: number;
}

export type Rect = [number, number, number, number];