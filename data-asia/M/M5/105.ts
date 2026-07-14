import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ダークベル",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "おたがいのバトルポケモン（[D]ポケモンをのぞく）を、それぞれこんらんにする。",
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
