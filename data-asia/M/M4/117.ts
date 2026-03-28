import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "チラーミィex",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 240,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "なめらかコート"}, "effect": {"ja": "このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。"}}],

	attacks: [{"name": {"ja": "エナジービンタ"}, "cost": ["Colorless"], "damage": "40×", "effect": {"ja": "このポケモンについているエネルギーの数×40ダメージ。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Hyper rare",
	dexId: [572],
	suffix: "EX",
};

export default card;
