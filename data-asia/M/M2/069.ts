import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ジグザグマ",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "好奇心 旺盛な ポケモン。  なににでも 興味を 持つので  いつも ジグザグに 歩いている。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ふいをつく"}, "damage": 30, "cost": ["Colorless"], "effect": {"ja": "コインを1回投げウラなら、このワザは失敗。"}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [263],

	thirdParty: {
		cardmarket: 850577,
		tcgplayer: 655848,
	},
};

export default card;