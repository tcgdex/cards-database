import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "空の封印石",
		'zh-tw': "天空封印石",
		th: "หินปิดผนึกนภา",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている「ポケモンV」は、このVSTARパワーを使える。特性スターオーダー自分の番に使える。この番、自分のたねポケモンの「ポケモンV」が使うワザのダメージで、相手のバトル場の「ポケモンVSTAR・VMAX」がきぜつしたなら、サイドを1枚多くとる。［対戦中、自分はVSTARパワーを1回しか使えない。］",
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。",
		th: "การ์ดไอเท็มติดโปเกมอน ใช้ติดโปเกมอนฝ่ายเรา 1 ตัวติดได้ 1 ใบ และติดไปตลอด",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687708,
				tcgplayer: 571684,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "F",
	rarity: "None",
};

export default card;
