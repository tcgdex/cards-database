import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "マスキッパ",
	},

	illustrator: "Heisuke Kitazawa",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "甘い においの だえきで 獲物を おびき寄せ おおあごで がぶり。 １日 かけて 獲物を 食べる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まるかじり" },
			damage: "80+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンのにげるためのエネルギーがないなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876902,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [455],
};

export default card;
