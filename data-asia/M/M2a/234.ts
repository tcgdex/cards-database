import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウex",
	},

	illustrator: "James Turner",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "がんばりハート"}, "effect": {"ja": "このポケモンのHPがまんたんの状態で、このポケモンがワザのダメージを受けてきぜつするとき、きぜつせず、残りHPが「10」の状態で場に残る。"}}],

	attacks: [{"name": {"ja": "トパーズボルト"}, "damage": "300", "cost": ["Grass", "Lightning", "Metal"], "effect": {"ja": "このポケモンについているエネルギーを3個選び、トラッシュする。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Special illustration rare",
};

export default card;
