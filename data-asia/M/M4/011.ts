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
		ja: "小枝を 食べると 元気になって 摂氏２００度を 超える 熱気を 大きな 耳から 噴き出す。",
	},

	stage: "Basic",
	attacks: [
		{ "name": { "ja": "なかまをよぶ" }, "damage": "", "cost": ["Colorless"], "effect": { "ja": "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。" } },
		{ "name": { "ja": "ひをはく" }, "damage": "10", "cost": ["Fire"], "effect": { "ja": "" } }
	],

	
	weaknesses: [{ "type": "Water", "value": "x2" }],
	
	resistances: [],
	
	retreat: 1,

	variants: [{"type": "normal"}],
	rarity: "Common",
	dexId: [653],
	regulationMark: "I",
};

export default card;
