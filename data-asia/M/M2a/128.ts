import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "Nのレシラム",
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		ja: "人が 真実を 蔑ろにして 欲に まみれると 炎で 国を 焼きつくすと 神話に 描かれた。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "パワーレイジ"}, "damage": "20x", "cost": ["Fire", "Lightning"], "effect": {"ja": "このポケモンにのっているダメカンの数×20ダメージ。"}}, {"name": {"ja": "イノセントフレイム"}, "damage": "170", "cost": ["Fire", "Fire", "Lightning"], "effect": {"ja": ""}}],

	weaknesses: [],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [643],
};

export default card;
