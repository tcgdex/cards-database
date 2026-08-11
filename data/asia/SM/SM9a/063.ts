import { Card } from "models/database/card";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キョウの罠",
	},

	illustrator: "TOKIYA",
	category: "Trainer",

	effect: {
		'ja-jp': "相手のバトルポケモンをどくとこんらんにする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558250,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Ultra Rare",
};

export default card;
