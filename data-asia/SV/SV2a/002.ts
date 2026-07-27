import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "フシギソウ",
		'zh-tw': "妙蛙草",
		th: "ฟุชิกิโซ",
		id: "Ivysaur",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "太陽の 光を 浴びるほど 体に 力が わいて 背中の つぼみが 育っていく。",
		'zh-tw': "沐浴在陽光下越久，身體內會湧出越多力量， 背上的花苞也會漸漸成長。",
		th: "ยิ่งอาบแดดมากก็จะยิ่งเกิดพลังมากขึ้นทำให้ดอกตูมบนหลังเติบโต",
		id: "Mandi cahaya matahari membuat Ivysaur makin kuat dan menumbuhkan kuncup di punggungnya.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "やどりぎのタネ",
				'zh-tw': "寄生種子",
				th: "เมล็ดกาฝาก",
				id: "Bibit Parasit",
			},
			damage: 30,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「20」回復する。",
				'zh-tw': "將這隻寶可夢恢復「20」HP。",
				th: "ฟื้นฟู HP ของโปเกมอนนี้ [20]",
				id: "Pulihkan HP Pokémon ini sejumlah 20.",
			},
		},
		{
			name: {
				ja: "つるのムチ",
				'zh-tw': "藤鞭",
				th: "แส้เถาวัลย์",
				id: "Cambuk Jalar",
			},
			damage: 80,
			cost: ["Grass", "Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719444,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837232,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837233,
			},
		},
	],

	evolveFrom: {
		ja: "フシギダネ",
	},

	retreat: 3,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [2],
};

export default card;
