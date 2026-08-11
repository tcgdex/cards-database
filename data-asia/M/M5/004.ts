import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ラランテスex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はつらつカッター" },
			damage: "60+",
			cost: ["Grass"],
			effect: {
				ja: "この番に、このポケモンのHPを回復していたなら、200ダメージ追加。",
			},
		},
		{
			name: { ja: "リーフガード" },
			damage: 140,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-50」される。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888240,
			},
		},
	],

	evolveFrom: {
		ja: "カリキリ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Double rare",
	dexId: [754],

	suffix: "EX",
};

export default card;
