import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴロンダ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "腕っ節が 自慢の ワイルドな ポケモン。 豪快な 性質に 惚れこむ トレーナーも 多い。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "なぐる" },
			damage: 40,
			cost: ["Colorless"],
		},
		{
			name: { ja: "マグナムパンチ" },
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556660,
			},
		},
	],

	evolveFrom: {
		ja: "ヤンチャム",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [675],
};

export default card;
