import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "シルシュルー",
	},

	illustrator: "Shimaris Yukichi",
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

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [944],

	thirdParty: {
		cardmarket: 840367,
		tcgplayer: 647181,
	},
};

export default card;