import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "スボミー",
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 30,
	types: ["Grass"],

	description: {
		ja: "毒を 含んだ 花粉を まく。 きれいな 水で 育てるほど 毒の 成分は 高まる。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "むずむずかふん"}, "cost": ["icon-void"], "damage": 10, "effect": {"ja": "次の相手の番、相手は手札からグッズを出して使えない。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 0,
	regulationMark: "I",
	rarity: "Common",
	dexId: [406],
};

export default card;
