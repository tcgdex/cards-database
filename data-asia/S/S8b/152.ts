import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "コルニの気合い",
		'zh-tw': "可爾妮的氣勢",
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		ja: "自分の手札が6枚になるように、山札を引く。",
		'zh-tw': "從牌庫抽卡直到自己的手牌滿6張為止。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586668,
				tcgplayer: 571405,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578433,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "None",
};

export default card;
