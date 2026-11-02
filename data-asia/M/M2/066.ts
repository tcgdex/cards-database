import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "エイパム",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "高い 木の上で 暮らしている。 枝から 枝へ 飛び移るとき 尻尾で 巧みに バランスをとる。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "おどろかす"}, "damage": 20, "cost": ["Colorless", "Colorless"], "effect": {"ja": "相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見て、相手の山札にもどして切る。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [190],

	thirdParty: {
		cardmarket: 850574,
		tcgplayer: 655845,
	},
};

export default card;