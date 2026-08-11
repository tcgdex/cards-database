import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ロコン",
	},

	illustrator: "Yoshimoto Yoshimon",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "温かい ６本の 尻尾は 体が 育つごとに 毛並みが 良くなり 美しく なっていく。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こがす" },
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876906,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [37],
};

export default card;
