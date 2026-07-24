import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "ツボツボ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "甲羅に 木の実を たくわえている。 襲われないように 岩の 下に こもって じっとしている。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "なましぼり" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の山札にある基本エネルギーを3枚まで、トラッシュする。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エナジードリンク" },
			cost: ["Grass"],
			effect: {
				ja: "自分のトラッシュにある基本エネルギーを2枚、自分のポケモンに好きなようにつける。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558890,
			},
		},
	],

	retreat: 1,
	rarity: "Uncommon",
	dexId: [213],
};

export default card;
