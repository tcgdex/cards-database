import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オコリザル",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'ja-jp': "ある研究者の 学説では モンスターボールの 中でも オコリザルは 怒っているらしい。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どつく" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888286,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マンキー",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [57],
};

export default card;
