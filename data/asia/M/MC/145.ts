import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "カルボウ",
	},

	illustrator: "Krgc",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "焼けた 木炭に 命が 宿り ポケモンになった。 燃える 闘志で 強敵にも 戦いを 挑む。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほのお" },
			damage: 30,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863441,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [935],
};

export default card;
