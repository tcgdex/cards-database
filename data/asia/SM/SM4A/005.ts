import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "チョボマキ",
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "カブルモと 一緒に いるときに 電気的な 刺激を 受けると お互いの 体が 進化する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "すいとる" },
			damage: 10,
			cost: ["Grass"],
			effect: {
				ja: "このポケモンのHPを「10」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560250,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [616],
};

export default card;
