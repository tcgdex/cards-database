import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲコガシラ",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "よびよせのじゅつ"}, "cost": ["Water"], "effect": {"ja": "自分の山札からポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。"}}, {"name": {"ja": "アクアエッジ"}, "cost": ["Water", "Water"], "damage": 50}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ケロマツ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [657],
};

export default card;
