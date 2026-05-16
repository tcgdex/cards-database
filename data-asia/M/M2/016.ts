import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒヒダルマ",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	description: {
		ja: "体内の 炎が 燃え盛るほど  パワーが 高まる。 その 温度は  １４００度を 超える ことも。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ブレイズボール"}, "damage": "40+", "cost": ["Colorless", "Colorless", "Colorless", "Colorless"], "effect": {"ja": "このポケモンについているエネルギーの数×40ダメージ追加。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ダルマッカ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [555],

	thirdParty: {
		cardmarket: 850523,
		tcgplayer: 655795,
	},
};

export default card;