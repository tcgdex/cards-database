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

	attacks: [{"name": {"ja": "パワーレイジ"}, "cost": ["Fire", "Lightning"], "damage": "20×", "effect": {"ja": "このポケモンにのっているダメカンの数×20ダメージ。"}}, {"name": {"ja": "イノセントフレイム"}, "cost": ["Fire", "Fire", "Lightning", "Colorless"], "damage": 170}],

	weaknesses: [],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [643],
};

export default card;
