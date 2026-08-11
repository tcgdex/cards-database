import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "メガヘラクロスex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "パンツァーホーン"}, "damage": "100+", "cost": ["Grass", "Grass"], "effect": {"ja": "前の相手の番に、このポケモンが受けたワザのダメージと同じダメージ追加。"}}, {"name": {"ja": "やまどつき"}, "damage": 170, "cost": ["Grass", "Grass", "Grass"], "effect": {"ja": "相手の山札を上から2枚トラッシュする。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [214],

	suffix: "EX",

	thirdParty: {
		cardmarket: 850601,
		tcgplayer: 655872,
	},
};

export default card;