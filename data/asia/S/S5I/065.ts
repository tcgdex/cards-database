import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "学習装置",
		'zh-tw': "學習裝置",
		th: "อุปกรณ์ช่วยเรียนรู้",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンが、相手のポケモンからワザのダメージを受けてきぜつするたび、そのポケモンについている基本エネルギーを1枚選び、このカードをつけているポケモンにつけ替えてよい。",
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。",
		th: "การ์ดไอเท็มติดโปเกมอน ใช้ติดโปเกมอนฝ่ายเรา 1 ตัวติดได้ 1 ใบ และติดไปตลอด",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533547,
				tcgplayer: 569014,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
