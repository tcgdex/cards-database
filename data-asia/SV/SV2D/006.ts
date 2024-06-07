import { Card } from "../../../interfaces"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヘラクロス",
		'zh-tw': "赫拉克羅斯",
		th: "เฮราครอส",
		id: "Heracross"
	},

	illustrator: "GOSSAN",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [214],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "甘いミツが 大好きで 独り占め するため 自慢のツノを 使って 相手を ぶん投げる。",
		'zh-tw': "對甜甜蜜愛不釋手，為了全都佔為己有， 會用引以為傲的角扔飛對手。",
		th: "ชอบน้ำผึ้งหวาน ๆ มาก ใช้เขาที่ภูมิใจเหวี่ยงอีกฝ่ายไปไกล ๆ เพื่อที่ตัวเองจะได้ยึดครองน้ำผึ้งไว้เพียงผู้เดียว",
		id: "Heracross sangat menyukai madu manis. Agar dapat memonopoli madunya, Pokémon ini menggunakan tanduk kebanggaannya untuk melempar lawannya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			ja: "たいあたり",
			'zh-tw': "撞擊",
			th: "พุ่งเข้าชน",
			id: "Serudukan"
		},

		damage: 50
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			ja: "スマッシュホーン",
			'zh-tw': "粉碎角擊",
			th: "สแมชฮอร์น",
			id: "Smash Horn"
		},

		damage: 110,

		effect: {
			ja: "このワザのダメージは抵抗力を計算しない。",
			'zh-tw': "這個招式的傷害不計算抵抗力。",
			th: "แดเมจของท่าต่อสู้นี้จะไม่นำความต้านทานมาคิด",
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh Resistansi."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card