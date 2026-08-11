import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "頂への雪道",
		'zh-tw': "通頂雪道",
		th: "ทางหิมะสู่ยอดเขา",
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		ja: "おたがいの場の「ルールを持つポケモン」の特性は、すべてなくなる。",
		'zh-tw': "雙方場上的「擁有規則的寶可夢」的特性全部消除。",
		th: "ความสามารถของ [โปเกมอนที่มีกฎ] ที่อยู่บนกระดานของทั้งสองฝ่ายจะหายไปทั้งหมด",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687727,
				tcgplayer: 571703,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577518,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "E",
	rarity: "None",
};

export default card;
