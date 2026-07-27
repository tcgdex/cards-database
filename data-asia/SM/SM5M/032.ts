import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ルナアーラ",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		ja: "別世界に 棲むと いわれる。 光を 喰らい続け 真昼も 闇夜の ように 翳らせる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "フルムーンスター" },
			cost: ["Psychic"],
			effect: {
				ja: "自分のトラッシュにある[超]エネルギーを、相手の場のポケモンの数ぶん、自分のポケモンに好きなようにつける。",
			},
		},
		{
			name: { ja: "サイコストーム" },
			damage: "20×",
			cost: ["Psychic", "Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "おたがいの場のポケモンについているエネルギーの数x20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559845,
			},
		},
	],

	retreat: 3,
	rarity: "Rare Holo",
	dexId: [792],
};

export default card;
