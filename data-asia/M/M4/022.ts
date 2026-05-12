import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "メガゲッコウガex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 350,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Stage2",
	abilities: [{"type": "Ability", "name": { "ja": "ひっさつしゅりけん" }, "effect": { "ja": "このポケモンがバトル場にいて、自分の番に、自分の手札から「基本「Water」エネルギー」を1枚トラッシュするなら、1回使える。相手のポケモン1匹に、ダメカンを6個のせる。" }}],

	attacks: [
		{ "name": { "ja": "ニンジャスピナー" }, "damage": "120+", "cost": ["Water", "Water"], "effect": { "ja": "のぞむなら、このポケモンについている「Water」エネルギーを1個手札にもどし、80ダメージ追加。" } }
	],

	
	weaknesses: [{ "type": "Lightning", "value": "x2" }],
	
	resistances: [],
	
	retreat: 1,

	variants: [{"type": "normal"}],
	evolveFrom: {
		ja: "ゲコガシラ",
	},
	rarity: "Double rare",
	regulationMark: "I",
};

export default card;
