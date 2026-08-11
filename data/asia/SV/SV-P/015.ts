import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ネストボール",
		'zh-tw': "妮莫",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札にあるたねポケモンを1枚、ベンチに出す。そして山札を切る。",
		'zh-tw': "從自己的牌庫抽出3張卡。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 699712,
				tcgplayer: 587772,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
