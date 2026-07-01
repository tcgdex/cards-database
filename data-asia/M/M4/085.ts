import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,

	name: {
		ja: "フォッコ",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "小枝を 食べると 元気になって 摂氏２００度を 超える 熱気を 大きな 耳から 噴き出す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "なかまをよぶ",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: {
				ja: "ひをはく",
			},
			damage: 10,
			cost: ["Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],
	variants: [{ type: "holo" }],
	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [653],

	thirdParty: {
		cardmarket: 876909
	}
};

export default card;
