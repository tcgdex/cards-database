import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ビードル",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'ja-jp': "森や 草地に 多く 生息。 頭の 先に ５センチぐらいの 小さく 鋭い 毒針を持つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふいをつく" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				'ja-jp': "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876898,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [13],
};

export default card;
