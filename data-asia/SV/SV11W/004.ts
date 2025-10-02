import { Card } from "../../../interfaces";
import Set from "../SV11W";

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
			effect: { ja: "このポケモンのHPを「10」回復する。" },
		},
	],

	weaknesses: [{ type: "Fire", value: "×2" }],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [546],
};

export default card;
