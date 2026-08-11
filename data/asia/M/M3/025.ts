import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "コリンク",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "筋肉が 伸び縮み することで 電気が 発生。 ピンチになると 体毛が まぶしく 光る。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ダブルひっかき"}, "damage": "10x", "cost": ["Lightning"], "effect": {"ja": "コインを2回投げ、オモテの数×10ダメージ。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [403],

	thirdParty: {
		cardmarket: 867946,
		tcgplayer: 674344,
	},
};

export default card;