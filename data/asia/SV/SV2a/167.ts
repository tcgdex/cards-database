import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フシギソウ",
		'zh-tw': "妙蛙草",
		'th-th': "ฟุชิกิโซ",
		'id-id': "Ivysaur",
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'ja-jp': "太陽の 光を 浴びるほど 体に 力が わいて 背中の つぼみが 育っていく。",
		'zh-tw': "沐浴在陽光下越久，身體內會湧出越多力量，背上的花苞也會漸漸成長。",
		'th-th': "ยิ่งอาบแดดมากก็จะยิ่งเกิดพลังมากขึ้นทำให้ดอกตูมบนหลังเติบโต",
		'id-id': "Mandi cahaya matahari membuat Ivysaur makin kuat dan menumbuhkan kuncup di punggungnya.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "やどりぎのタネ",
				'zh-tw': "寄生種子",
				'th-th': "เมล็ดกาฝาก",
				'id-id': "Bibit Parasit",
			},
			damage: 30,
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「20」回復する。",
				'zh-tw': "將這隻寶可夢恢復「20」HP。",
				'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [20]",
				'id-id': "Pulihkan HP Pokémon ini sejumlah 20.",
			},
		},
		{
			name: {
				'ja-jp': "つるのムチ",
				'zh-tw': "藤鞭",
				'th-th': "แส้เถาวัลย์",
				'id-id': "Cambuk Jalar",
			},
			damage: 80,
			cost: ["Grass", "Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719620,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "フシギダネ",
	},

	retreat: 3,
	regulationMark: "G",
	rarity: "Illustration rare",
	dexId: [2],
};

export default card;
