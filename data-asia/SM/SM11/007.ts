import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "クルマユ",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "クルマユの 住む 森は 草木が よく 育つ。 クルマユが 落ち葉を 栄養分に 変えているのだ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はっぱのおくるみ" },
			effect: {
				ja: "このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "むしくい" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556966,
			},
		},
	],

	evolveFrom: {
		ja: "クルミル",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [541],
};

export default card;
