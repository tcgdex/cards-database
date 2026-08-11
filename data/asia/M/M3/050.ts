import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "スコルピ",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "砂に 体を 埋め じっと  獲物を 待ち続けている。  ヤクデと 祖先が 近い。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "どくづき"}, "damage": 20, "cost": ["Darkness", "Darkness"], "effect": {"ja": "相手のバトルポケモンをどくにする。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [451],

	thirdParty: {
		cardmarket: 867972,
		tcgplayer: 674369,
	},
};

export default card;