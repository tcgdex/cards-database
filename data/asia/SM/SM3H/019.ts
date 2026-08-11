import { Card } from "models/database/card";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マリル",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "全身の 体毛は 水を 弾く 性質を 持ち 水浴び しても 乾いている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あわ" },
			cost: ["Water"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ころがる" },
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
				cardmarket: 561083,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [183],
};

export default card;
