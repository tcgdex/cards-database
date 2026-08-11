import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スグリ",
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、2つの効果から1つを選んで使う。◆自分のバトルポケモンをベンチポケモンと入れ替える。◆この番、自分のポケモンが使うワザの、相手のバトル場の「ポケモンex・V」へのダメージは「+30」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821713,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Promo",
};

export default card;
