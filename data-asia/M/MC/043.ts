import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "モンメン",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "襲われると 体から 綿を 飛ばす。 敵が 綿を モンメンと 間違えている すきに 逃げるのだ。",
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
				cardmarket: 863334,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [546],
};

export default card;
