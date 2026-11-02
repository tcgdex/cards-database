import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "マスキッパ",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "甘い においの だえきで 獲物を おびき寄せ おおあごで がぶり。 １日 かけて 獲物を 食べる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "さそいどく" },
			cost: ["Grass"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンをどくにする。",
			},
		},
		{
			name: { ja: "かみくだく" },
			damage: 30,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560165,
			},
		},
	],

	retreat: 2,
	rarity: "Uncommon",
	dexId: [455],
};

export default card;
