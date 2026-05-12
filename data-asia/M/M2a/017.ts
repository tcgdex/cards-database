import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "オーガポン みどりのめんex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "みどりのまい"}, "effect": {"ja": "自分の番に1回使える。自分の手札から「基本「Grass」エネルギー」を1枚選び、このポケモンにつける。その後、自分の山札を1枚引く。"}}],

	attacks: [{"name": {"ja": "まんようしぐれ"}, "damage": "30+", "cost": ["Grass", "Grass", "Grass"], "effect": {"ja": "おたがいのバトルポケモンについているエネルギーの数×30ダメージ追加。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
};

export default card;
