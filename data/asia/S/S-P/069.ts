import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ポケモンセンターのお姉さん",
		'zh-tw': "伽勒爾 魔牆人偶",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のポケモンを1匹選び、そのポケモンのHPを「60」回復し、特殊状態もすべて回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525075,
				tcgplayer: 597280,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Promo",
};

export default card;
