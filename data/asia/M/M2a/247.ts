import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アイリスの闘志",
	},

	illustrator: "Kuroimori",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、自分の手札を1枚トラッシュしなければ使えない。自分の手札が6枚になるように、山札を引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861490,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Special illustration rare",
};

export default card;
