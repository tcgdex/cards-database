import { Card } from "models/database/card";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ネマシュ",
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 60,
	types: ["Fairy"],

	description: {
		'ja-jp': "昼は 寝ながら 樹木の 根から 養分を 吸う。 夜に 目覚め 新たな 樹木を 探し歩く。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まどわす" },
			cost: ["Fairy"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558861,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [755],
};

export default card;
