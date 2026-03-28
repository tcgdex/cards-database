import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "マッギョ",
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "海辺の 泥に 埋まって 獲物を 待ち構える。 獲物が 触れたとき 電気を 出して しびれさせるのだ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "とびつくわな"}, "cost": ["Lightning"], "damage": 30, "effect": {"ja": "次の相手の番、このワザを受けたポケモンは、にげられない。次の自分の番、このワザを受けたポケモンが受けるワザのダメージは「+100」される。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [618],
};

export default card;
