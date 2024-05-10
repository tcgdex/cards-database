import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "フシギソウ",
		'zh-tw': "妙蛙草",
		th: "ฟุชิกิโซ",
		id: "Ivysaur"
	},

	illustrator: "Yuu Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [2],
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "太陽の 光を 浴びるほど 体に 力が わいて 背中の つぼみが 育っていく。",
		'zh-tw': "沐浴在陽光下越久，身體內會湧出越多力量， 背上的花苞也會漸漸成長。",
		th: "ยิ่งอาบแดดมากก็จะยิ่งเกิดพลังมากขึ้นทำให้ดอกตูมบนหลังเติบโต",
		id: "Mandi cahaya matahari membuat Ivysaur makin kuat dan menumbuhkan kuncup di punggungnya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "やどりぎのタネ",
			'zh-tw': "寄生種子",
			th: "เมล็ดกาฝาก",
			id: "Bibit Parasit"
		},

		damage: 30,

		effect: {
			ja: "このポケモンのHPを「20」回復する。",
			'zh-tw': "將這隻寶可夢恢復「20」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [20]",
			id: "Pulihkan HP Pokémon ini sejumlah 20."
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "つるのムチ",
			'zh-tw': "藤鞭",
			th: "แส้เถาวัลย์",
			id: "Cambuk Jalar"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card