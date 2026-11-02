import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "こだわりベルト",
		'zh-tw': "講究腰帶",
		th: "เข็มขัดแห่งความแน่วแน่",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが使うワザの、相手のバトル場の「ポケモンV」へのダメージは「+30」される。",
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。",
		th: "การ์ดไอเท็มติดโปเกมอน ใช้ติดโปเกมอนฝ่ายเรา 1 ตัวติดได้ 1 ใบ และติดไปตลอด",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687707,
				tcgplayer: 571683,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577503,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "F",
	rarity: "None",
};

export default card;
