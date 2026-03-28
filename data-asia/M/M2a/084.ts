import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "アサナン",
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "１日 １個だけ 木の実を 食べる。 空腹に 耐えることで 心が 研ぎ澄まされていく。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "もってくる"}, "cost": ["Colorless"], "effect": {"ja": "自分の山札を1枚引く。"}}, {"name": {"ja": "ひっぱたく"}, "cost": ["Fighting"], "damage": 10}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [307],
};

export default card;
