import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "シュシュプ",
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "昔の 貴婦人たちは 香水の かわりに 好みの 香りを 出す シュシュプを 連れていたという。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "あまいかおり"}, "cost": ["Colorless"], "effect": {"ja": "自分のポケモン1匹のHPを「30」回復する。"}}, {"name": {"ja": "ぶつかる"}, "damage": 10, "cost": ["Psychic"]}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [682],

	thirdParty: {
		cardmarket: 867956,
		tcgplayer: 674353,
	},
};

export default card;