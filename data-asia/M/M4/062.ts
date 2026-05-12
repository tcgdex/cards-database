import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "コバルオンex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Basic",
	abilities: [{"type": "Ability", "name": { "ja": "メタルロード" }, "effect": { "ja": "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。自分の場のポケモンについている「Metal」エネルギーを好きなだけ選び、このポケモンにつけ替える。" }}],

	attacks: [
		{ "name": { "ja": "パワータックル" }, "damage": "200", "cost": ["Metal", "Metal"], "effect": { "ja": "次の自分の番、このポケモンはワザが使えない。" } }
	],

	
	weaknesses: [{ "type": "Fire", "value": "x2" }],
	
	resistances: [],
	
	retreat: 2,

	variants: [{"type": "normal"}],
	rarity: "Double rare",
	regulationMark: "I",
};

export default card;
