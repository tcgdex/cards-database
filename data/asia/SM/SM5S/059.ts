import { Card } from "models/database/card";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アカギ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、自分のバトル場に[水]または[鋼]ポケモンがいなければ使えない。相手は相手自身のベンチポケモンが2匹になるまで、ポケモンとついているすべてのカードを、山札にもどして切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560013,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Rare Holo",
};

export default card;
