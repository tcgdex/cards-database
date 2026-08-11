import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ハスブレロ",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "エサの 豊富な 水辺を 好む。 鳥ポケモンと エサの 取り合いを しないように 夜行性になった。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "メガドレイン"}, "damage": 30, "cost": ["Grass", "Colorless"], "effect": {"ja": "このポケモンのHPを「30」回復する。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ハスボー",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [271],

	thirdParty: {
		cardmarket: 850513,
		tcgplayer: 655785,
	},
};

export default card;