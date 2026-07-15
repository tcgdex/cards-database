import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "アクア団のキバニア",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		ja: "水の中なら こいつの 動きに ついて これないだろ？ この渦に 巻き込まれたら 脱出できないぜ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひれビンタ" },
			damage: "10×",
			cost: ["Darkness"],
			effect: {
				ja: "コインを2回投げ、オモテの数x10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563740,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [318],
};

export default card;
