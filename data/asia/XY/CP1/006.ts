import { Card } from "../../../interfaces";
import Set from "../CP1";

const card: Card = {
	set: Set,
	name: {
		ja: "アクア団のカイオーガEX",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 190,
	types: ["Water"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "パワーセーバー" },
			effect: {
				ja: "おたがいの場にいる「アクア団」のポケモンの合計が4匹以下なら、このポケモンはワザが使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "アクアインパクト" },
			damage: "80+",
			cost: ["Water", "Water", "Water", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンのにげるために必要なエネルギーの数x20ダメージを追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 563726,
			},
		},
	],

	retreat: 4,
	rarity: "Double rare",
	dexId: [382],

	suffix: "EX",
};

export default card;
