import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラキュウコン",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 110,
	types: ["Fairy"],

	description: {
		ja: "雪山で 迷った 人間を 麓まで 案内 してくれるのは さっさと 追い払いたいからだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ちりふぶき" },
			damage: "10×",
			cost: [],
			effect: {
				ja: "自分のトラッシュにある「ポケモンのどうぐ」の枚数×10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 554911,
			},
		},
	],

	evolveFrom: {
		ja: "アローラロコン",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [38],
};

export default card;
