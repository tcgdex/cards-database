import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],

	description: {
		ja: "",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "がんばりハート"}, "effect": {"ja": "このポケモンのHPがまんたんの状態で、このポケモンがワザのダメージを受けてきぜつするとき、きぜつせず、残りHPが「10」の状態で場に残る。"}}],

	attacks: [{"name": {"ja": "トパーズボルト"}, "cost": ["Grass", "Lightning", "Metal"], "damage": 300, "effect": {"ja": "このポケモンについているエネルギーを3個選び、トラッシュする。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
};

export default card;
