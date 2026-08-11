import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "スクールガール",
		'zh-tw': "女學生",
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。相手のサイドの残り枚数が6枚・4枚・2枚なら、さらに2枚引く。",
		'zh-tw': "從自己的牌庫抽出2張卡。若對手剩餘獎賞卡的張數為6張・4張・2張，則再抽出2張卡。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571654,
				tcgplayer: 569387,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Common",
};

export default card;
