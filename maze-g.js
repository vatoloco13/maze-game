const mazeElement = document.querySelector('.maze')
const pathW = 25;
const wallW = 10;

const walls = [

    {column: 0, row 0, horizantal:true, length: 10},
    {column: 0, row 0, horizantal:false, length:9},
    {column: 0, row 9, horizantal:true, length: 10},
    {column: 10, row 0, horizantal:false, length9},
].map((wall)=> ({
    x: wall.column * (pathW + wallW),
    y: wall.row * (pathW + wallW),
    horizantal: wall.horizantal,
    length: wall.length * (pathW + wallW),
}));

