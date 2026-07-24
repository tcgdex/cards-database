import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴースト",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "暗闇から 人間を 狙う。 冷たい 舌に 舐められると 日に日に 弱り 死に 至る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ダメージぞうふく" },
			cost: ["Psychic"],
			effect: {
				ja: "ダメカンがのっている相手のポケモン全員に、それぞれダメカンを2個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560333,
			},
		},
	],

	evolveFrom: {
		ja: "ゴース",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [93],
};

export default card;
