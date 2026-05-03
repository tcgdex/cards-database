import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "フシギダネ",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "生まれて しばらくの あいだ 背中の タネに 詰まった 栄養を 取って 育つ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "しばりつける"}, "damage": 10, "cost": ["Grass"], "effect": {"ja": "次の相手の番、このワザを受けたポケモンは、にげられない。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [1],

	thirdParty: {
		cardmarket: 840150,
		tcgplayer: 647110,
	},
};

export default card;