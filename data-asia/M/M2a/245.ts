import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ダイゴのメタグロスex",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 340,
	types: ["Metal"],

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "エクスブート"}, "effect": {"ja": "自分の番に1回使える。自分の山札から「基本「Psychic」エネルギー」と「基本「Metal」エネルギー」をそれぞれ1枚まで選び、自分の「Psychic」または「Metal」ポケモンに好きなようにつける。そして山札を切る。"}}],

	attacks: [{"name": {"ja": "メタルスタンプ"}, "damage": "200", "cost": ["Metal"], "effect": {"ja": ""}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ダイゴのメタング",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Special illustration rare",
};

export default card;
