import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "アリゲイツ",
		'zh-tw': "藍鱷",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "一度 かみつくと キバが 抜けるまで 絶対に 離さない。 抜けた キバは すぐに 生えてくる。",
		'zh-tw': "一旦咬住，除非牙齒脫落，否則絕不會鬆口。脫落的牙齒馬上就能再長出來。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "スプラッシュ",
				'zh-tw': "飛濺",
			},
			damage: 30,
			cost: ["Water"],
		},
		{
			name: {
				ja: "なみのり",
				'zh-tw': "衝浪",
			},
			damage: 60,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575576,
				tcgplayer: 569522,
			},
		},
	],

	evolveFrom: {
		ja: "ワニノコ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [159],
};

export default card;
