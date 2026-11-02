import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "タマザラシ",
		'zh-tw': "海豹球",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "フサフサの 体毛で 体が 覆われて いるので 氷の 上を 転がっても 冷たくない。",
		'zh-tw': "身體被蓬鬆的體毛覆蓋著，因此即使在冰上翻滾也不會覺得冷。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "子彈拳",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560438,
				tcgplayer: 569154,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [363],
};

export default card;
