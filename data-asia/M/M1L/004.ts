import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "タマタマ",
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "タマゴだと 思って 触ると 仲間が どんどん 集まってきて 集団攻撃に あう。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "みがつまる"}, "cost": ["Colorless"], "effect": {"ja": "自分の山札から「基本エネルギー」を1枚選び、このポケモンにつける。そして山札を切る。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [102],

	thirdParty: {
		cardmarket: 840153,
		tcgplayer: 647113,
	},
};

export default card;