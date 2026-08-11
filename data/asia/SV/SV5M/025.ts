import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "エレブー",
		'zh-tw': "電擊獸",
		th: "เอเลบู",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "電気を 狙う エレブーの 対策に じめんポケモンを 置く 発電所は 多い。",
		'zh-tw': "很多發電廠會用地面屬性的寶可夢當守衛，藉以對抗 想伺機偷吃電力的電擊獸。",
		th: "มีโรงผลิตไฟฟ้าจำนวนมากที่วางโปเกมอนดินไว้เพื่อรับมือกับเอเลบูที่หมายตาพลังงานไฟฟ้า",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "チョップ",
				'zh-tw': "劈打",
				th: "สับ",
			},
			damage: 20,
			cost: ["Lightning"],
		},
		{
			name: {
				ja: "ビリリパンチ",
				'zh-tw': "麻麻拳",
				th: "หมัดช็อตแปล๊บ ๆ",
			},
			damage: 50,
			cost: ["Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752906,
				tcgplayer: 566176,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [125],
};

export default card;
