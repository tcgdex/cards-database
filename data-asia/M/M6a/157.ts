import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲッコウガBREAK",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	stage: "BREAK",

	abilities: [
		{
			type: "Ability",
			name: { ja: "きょだいみずしゅりけん" },
			effect: {
				ja: "自分の手札から[W]エネルギーを1枚選び、トラッシュする。その後、相手のポケモンを1匹選び、ダメカンを6個のせる。この特性は、このポケモンがバトル場にいるなら、自分の番に1回使える。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908335,
			},
		},
	],

	retreat: 0,
	rarity: "Classic Collection",
	dexId: [658],
};

export default card;
