import { Card } from "models/database/card";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シズクモ",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "シズクモ同士が 出会うと 頭の 水泡を 自慢し アピールする。 小さな 方が 道を 譲る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずかけ" },
			damage: 10,
			cost: ["Water"],
		},
		{
			name: { ja: "かみつく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556977,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [751],
};

export default card;
