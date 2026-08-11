import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウV",
		'zh-tw': "辣味香料咖哩",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じゅうでん" },
			cost: ["Lightning"],
			effect: {
				ja: "自分の山札から[雷]エネルギーを2枚まで選び、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "10まんボルト" },
			damage: 200,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525295,
				tcgplayer: 597323,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [25],
};

export default card;
