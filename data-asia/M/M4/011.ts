import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "フォッコ",
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "なかまをよぶ"}, "cost": ["Colorless"], "effect": {"ja": "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"}}, {"name": {"ja": "ひをはく"}, "cost": ["Fire"], "damage": 10}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [653],
};

export default card;
