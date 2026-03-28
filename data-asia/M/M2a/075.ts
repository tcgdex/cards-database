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

	description: {
		ja: "",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "スカイライン"}, "effect": {"ja": "このポケモンがいるかぎり、自分のたねポケモン全員のにげるためのエネルギーは、すべてなくなる。"}}],

	attacks: [{"name": {"ja": "むげんのやいば"}, "cost": ["Psychic", "Psychic", "Colorless"], "damage": 200, "effect": {"ja": "次の自分の番、このポケモンはワザが使えない。"}}],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
};

export default card;
