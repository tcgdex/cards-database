import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホップのカビゴン",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "眠っているとき以外は つねに エサを 食べている 大食らい。 １日に ４００キロも たいらげる。",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "ふとっぱら"}, "effect": {"ja": "このポケモンがいるかぎり、自分の「ホップのポケモン」が使うワザの、相手のバトルポケモンへのダメージは「+30」される。この効果は、この特性を持つポケモンが何匹いても、重ならない。"}}],

	attacks: [{"name": {"ja": "ダイナミックプレス"}, "cost": ["Colorless", "Colorless", "Colorless"], "damage": 140, "effect": {"ja": "このポケモンにも80ダメージ。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 4,
	regulationMark: "I",
	rarity: "Common",
	dexId: [143],
};

export default card;
