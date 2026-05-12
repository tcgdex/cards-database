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
		ja: "甘い においの だえきで 獲物を  おびき寄せ おおあごで がぶり。  １日 かけて 獲物を 食べる。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "まるかじり" }, "damage": "80+", "cost": [], "effect": { "ja": "相手のバトルポケモンのにげるためのエネルギーがないなら、80ダメージ追加。" } }
	],

	
	weaknesses: [{ "type": "Fire", "value": "x2" }],
	
	resistances: [],
	
	retreat: 2,

	variants: [{"type": "normal"}],
	rarity: "Common",
	dexId: [455],
	regulationMark: "I",
};

export default card;
