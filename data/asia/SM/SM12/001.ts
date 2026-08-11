import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒマナッツ",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "ある朝 突然 降ってくる。 オニスズメに 襲われると 葉っぱを 激しく 振って 追い払う。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "やどりぎのタネ" },
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
				cardmarket: 554751,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [191],
};

export default card;
