import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ナマケロ",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "ナマケロの 怠けた 様子は 見ている 人の 怠け心を 存分に 刺激するのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "のんびりする" },
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンのHPを「60」回復する。次の自分の番、このポケモンはにげられない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863883,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [287],
};

export default card;
