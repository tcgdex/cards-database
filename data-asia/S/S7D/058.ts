import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "すりかえカップ",
		'zh-tw': "掉包杯",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "自分の手札を1枚選び、山札の上のカードと入れ替える。",
		'zh-tw': "選擇1張自己的手牌，與牌庫上方的卡互換。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571647,
				tcgplayer: 569381,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
