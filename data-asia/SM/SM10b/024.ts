import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "デンジュモク",
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "この世界では 異質で 危険だが 本来 棲んでいる 世界では 普通に 見かける 生物らしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スリーミラーズ" },
			damage: "30+",
			cost: ["Lightning"],
			effect: {
				ja: "相手のサイドの残り枚数が3枚なら、90ダメージ追加。",
			},
		},
		{
			name: { ja: "シグナルビーム" },
			damage: 50,
			cost: ["Lightning", "Lightning"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557225,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [796],
};

export default card;
