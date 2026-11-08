import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ダークベル",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのバトルポケモン（[D]ポケモンをのぞく）を、それぞれこんらんにする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888650,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "J",
	rarity: "Ultra Rare",
};

export default card;
