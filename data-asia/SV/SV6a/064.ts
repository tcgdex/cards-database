import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "夜のアカデミー",
		'zh-tw': "夜間學院",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の手札を1枚選び、山札の上にもどしてよい。",
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次，可選擇1張自己的手牌，放回牌庫上方。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773813,
				tcgplayer: 566315,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "H",
	rarity: "Uncommon",
};

export default card;
