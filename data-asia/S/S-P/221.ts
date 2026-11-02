import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "からぶりほけん",
		'zh-tw': "小火馬",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンがワザを使ったとき、ワザのダメージや効果で自分がコインを投げてウラが出たなら、自分の番の終わりに、自分の山札を3枚引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 574589,
				tcgplayer: 597405,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "E",
	rarity: "Promo",
};

export default card;
