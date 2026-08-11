import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "フルフェイスガード",
		'zh-tw': "全罩防守",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモン（特性を持つポケモンをのぞく）が、相手のポケモンから受けるワザのダメージは「-20」される。",
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571652,
				tcgplayer: 569385,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
