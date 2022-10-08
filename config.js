import {
    day2022_10_8_rotate,
    day2022_10_8_littleSquare,
    mergeLayer,
    rectangleLayer,
    horizontalLine,
} from "./map/util.js";
import level1 from "./map/level1.js";

export const _config = {
    /** 候选区大小  */
    candidateSize: 7,
    /* 候选区无穷大 */
    candidateInfinite: false,
    /**
     * 卡片大小 vw/vmin
     * 12/14vw
     */
    itemSize: {
        width: 3,
        height: 3.6,
    },
    /**
     * 棋盘大小,值是卡片大小的倍数
     */
    mapSize: {
        width: 7,
        height: 9,
    },
};

/**
 * @type {MapLayer}
 */
export const map = [
    // ...level1
    ...mergeLayer(
        day2022_10_8_littleSquare(2.5, 0.5),
        day2022_10_8_littleSquare(2.5, 5.5),
        day2022_10_8_littleSquare(0.5, 3),
        day2022_10_8_littleSquare(4.5, 3.5)
    ),
    ...mergeLayer(
        day2022_10_8_littleSquare(0.5, 2.5, 3),
        day2022_10_8_littleSquare(3.5, 2.5, 3)
    ),
    ...day2022_10_8_rotate(0.5, 7.5, 0.5, 6.5),

    rectangleLayer(0.5, 7.5, 0.5, 6.5),
    rectangleLayer(0.5, 7.5, 0.5, 6.5),
    rectangleLayer(1, 7, 1, 6),
    rectangleLayer(1, 7, 1, 6),
    rectangleLayer(0.5, 7.5, 0.5, 6.5),
    rectangleLayer(1, 7, 1, 6),
    rectangleLayer(0.5, 7.5, 0.5, 6.5),
    rectangleLayer(1, 7, 1, 6),
    ...horizontalLine(7.8, 0.5, 0.1, 12),
    ...horizontalLine(7.8, 5.5, -0.1, 12),

    // rectangleLayer(0.5, 6.5, 0.5, 6.5),

    // rectangleLayer(0.5, 7, 0.5, 6.5),

    // [
    //     { x: 2.3, y: 1 },
    //     { x: 1, y: 1 },
    // ],
    // rectangleLayer(0.5, 8.5, 0.5, 6.5),
    // rectangleLayer(1, 8, 1, 6),
    // rectangleLayer(1, 8, 1, 6),
    // // 简单的部分
    // rectangleLayer(0.5, 8.5, 0.5, 6.5),
    // rectangleLayer(0.5, 8.5, 0.5, 6.5),
    // rectangleLayer(1, 8, 1, 6),
    // rectangleLayer(1, 8, 1, 6),
    // rectangleLayer(0.5, 8.5, 0.5, 6.5),
    // rectangleLayer(1, 8, 1, 6),
    // rectangleLayer(0.5, 8.5, 0.5, 6.5),
    // rectangleLayer(1, 8, 1, 6),
    // rectangleLayer(0.5, 8.5, 0.5, 6.5),
    // rectangleLayer(1, 8, 1, 6),
    // rectangleLayer(0.5, 8.5, 0.5, 6.5),
    // rectangleLayer(1, 8, 1, 6),
    /*

    // */
];

/**
 * @type {config}
 */
export const config = {
    map,
    ..._config,
};

/**
 * 使用的素材图片的数量
 */
const imageSize = 8;

const _images = [
    "fruits/包子.png",
    "fruits/南瓜.png",
    "fruits/杨桃.png",
    "fruits/火龙果.png",
    "fruits/石榴.png",
    "fruits/竹笋.png",
    "fruits/茄子.png",
    "fruits/蒜头.png",
    "fruits/西瓜.png",
    "fruits/豌豆.png",
    "fruits/车厘子.png",
    "fruits/面包.png",
    "fruits/鲜鱼.png",
    "fruits/龙虾.png",
];

/** 每次都随机使用不同的图片 */
export function updateImages() {
    let newImages = [];
    let imgs = _images.slice(0);
    for (var i = 0; i < imageSize; i++) {
        let index = ~~(Math.random() * imgs.length);
        newImages.push(...imgs.splice(index, 1));
    }
    images = newImages;
}
/**

 */
export let images = [
    ..._images.slice(0, imageSize),
    // "16gl-1.png",
    // "16gl-2.png",
    // "16gl-3.png",
    // "16gl-4.png",
    // "16gl-5.png",
    // "16gl-6.png",
    // "16gl-7.png",
    // "16gl-8.png",
    // "16gl-9.png",
];
