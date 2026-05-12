import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "メガディアンシーex",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "ダイヤコート"}, "effect": {"ja": "このポケモンが受けるワザのダメージは「-30」される。"}}],

	attacks: [{"name": {"ja": "ガーランドレイ"}, "damage": "120x", "cost": ["Psychic", "Psychic"], "effect": {"ja": "このポケモンについているエネルギーを2枚までトラッシュし、その枚数×120ダメージ。"}}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Ultra Rare",
};

export default card;
