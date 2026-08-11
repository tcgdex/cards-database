import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "葉隠れポンチョ",
		'zh-tw': "葉隱披風",
		th: "เสื้อคลุมใบไม้กันฝน",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている「ポケモンVSTAR・VMAX」は、相手が手札からサポートを出して使ったとき、その効果を受けない。",
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。",
		th: "การ์ดไอเท็มติดโปเกมอน ใช้ติดโปเกมอนฝ่ายเรา 1 ตัวติดได้ 1 ใบ และติดไปตลอด",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687709,
				tcgplayer: 571685,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577504,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "F",
	rarity: "None",
};

export default card;
