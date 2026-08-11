import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ミミロル",
	},

	illustrator: "tono",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "まるめた 耳を 伸ばす 勢いで 攻撃する 技は トレーニングを するほど 威力が 増していく。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "はしゃぐ"}, "cost": ["Colorless"], "effect": {"ja": "このポケモンをベンチポケモンと入れ替える。"}}, {"name": {"ja": "キック"}, "damage": 20, "cost": ["Colorless", "Colorless"]}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [427],

	thirdParty: {
		cardmarket: 850579,
		tcgplayer: 655850,
	},
};

export default card;