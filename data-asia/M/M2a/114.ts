import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "キチキギスex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "さかてにとる"}, "effect": {"ja": "前の相手の番に、自分のポケモンがきぜつしていたなら、自分の番に1回使える。自分の山札を3枚引く。この番、すでに別の「さかてにとる」を使っていたなら、この特性は使えない。"}}],

	attacks: [{"name": {"ja": "クルーエルアロー"}, "cost": ["Colorless", "Colorless", "Colorless"], "effect": {"ja": "相手のポケモン1匹に、100ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
};

export default card;
