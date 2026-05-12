import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ラティアスex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "スカイライン"}, "effect": {"ja": "このポケモンがいるかぎり、自分のたねポケモン全員のにげるためのエネルギーは、すべてなくなる。"}}],

	attacks: [{"name": {"ja": "むげんのやいば"}, "damage": "200", "cost": ["Psychic", "Psychic"], "effect": {"ja": "次の自分の番、このポケモンはワザが使えない。"}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
};

export default card;
