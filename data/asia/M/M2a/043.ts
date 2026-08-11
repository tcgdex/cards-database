import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "パオジアン",
	},

	illustrator: "toi8",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "大昔に 剣によって 露と消えた 者たちの 憎しみが 雪を まとい ポケモンになった。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ゆきにしずめる" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。場に出ているスタジアムをトラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "アイシクルループ" },
			damage: 120,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、手札にもどす。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861286,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861598,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 861599,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [1002],
};

export default card;
