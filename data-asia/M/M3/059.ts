import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "コラッタ",
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],

	description: {
		ja: "一生 前歯が 伸び続ける。  あまりに 伸びすぎると エサが  食べられなくなって 餓死 する。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "とっしん"}, "damage": 30, "cost": ["Colorless"], "effect": {"ja": "このポケモンにも10ダメージ。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [19],

	thirdParty: {
		cardmarket: 868028,
		tcgplayer: 674378,
	},
};

export default card;