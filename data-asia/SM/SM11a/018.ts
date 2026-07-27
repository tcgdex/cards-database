import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルダック",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "泳ぎが 速い さかなポケモンでも 金縛りで 動きを 止めて 簡単に 捕まえることが できる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひっかく" },
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: { ja: "エネループ" },
			damage: 80,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個手札にもどす。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556599,
			},
		},
	],

	evolveFrom: {
		ja: "コダック",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [55],
};

export default card;
