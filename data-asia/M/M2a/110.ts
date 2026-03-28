import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "メガズルズキンex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "はんげきトサカ"}, "effect": {"ja": "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを5個のせる。"}}],

	attacks: [{"name": {"ja": "アウトローレッグ"}, "cost": ["Darkness", "Darkness", "Colorless"], "damage": 160, "effect": {"ja": "相手の手札からオモテを見ないで1枚選び、トラッシュする。相手の山札を上から1枚トラッシュする。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ズルッグ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
};

export default card;
