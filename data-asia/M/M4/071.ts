import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "チラチーノex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 240,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Stage1",
	abilities: [{"type": "Ability", "name": { "ja": "なめらかコート" }, "effect": { "ja": "このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。" }}],

	attacks: [
		{ "name": { "ja": "エナジービンタ" }, "damage": "40x", "cost": ["Colorless"], "effect": { "ja": "このポケモンについているエネルギーの数×40ダメージ。" } }
	],

	
	weaknesses: [{ "type": "Fighting", "value": "x2" }],
	
	resistances: [],
	
	retreat: 1,

	variants: [{"type": "normal"}],
	evolveFrom: {
		ja: "チラーミィ",
	},
	rarity: "Double rare",
	regulationMark: "I",
};

export default card;
