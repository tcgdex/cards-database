import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "メガフラエッテex",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "やさしいひかり"}, "cost": ["Psychic"], "effect": {"ja": "おたがいのポケモン全員のHPを、それぞれ「30」回復する。"}}, {"name": {"ja": "エタニティブルーム"}, "cost": ["Psychic", "Psychic", "Psychic"], "damage": 200, "effect": {"ja": "自分の山札から「基本エネルギー」を4枚まで選び、ベンチポケモンに好きなようにつける。そして山札を切る。"}}],

	weaknesses: [{"type": "Metal", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Special illustration rare",
	dexId: [670],
	suffix: "EX",
};

export default card;
