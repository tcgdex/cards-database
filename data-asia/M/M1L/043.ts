import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "シルシュルー",
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "温厚だが 怒らせると 毒が 染みこんだ 鋭い 前歯で 咬みつき 痺れさせてくるぞ。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "どくづき"}, "damage": 20, "cost": ["Darkness", "Colorless"], "effect": {"ja": "相手のバトルポケモンをどくにする。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [944],

	thirdParty: {
		cardmarket: 840338,
		tcgplayer: 647152,
	},
};

export default card;