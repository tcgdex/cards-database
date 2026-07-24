import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "フリーザーGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "でんせつのひしょう" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。このポケモンをバトルポケモンと入れ替える。入れ替えた場合、自分の場のポケモンについている[水]エネルギーを好きなだけ、このポケモンにつけ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "アイスウイング" },
			damage: 130,
			cost: ["Water", "Water", "Colorless"],
		},
		{
			name: { ja: "コールドクラッシュGX" },
			cost: ["Water"],
			effect: {
				ja: "おたがいのバトルポケモンについているエネルギーを、すべてトラッシュする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559217,
			},
		},
	],

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [144],

	suffix: "GX",
};

export default card;
