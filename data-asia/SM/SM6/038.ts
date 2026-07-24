import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "クズモー",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "腐った 海藻に そっくり。 敵の 目を ごまかしながら 進化する 力を 蓄える。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっかける" },
			damage: 10,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559583,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [690],
};

export default card;
