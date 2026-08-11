import { Card } from "../../../interfaces"
import Set from "../SVAM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蘑蘑菇",
		th: "คิโนโคโค",
		id: "Shroomish"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "喜歡潮濕的地方，白天會動也不動地待在森林的樹蔭下。 會從頭上放出毒粉。",
		th: "ชอบพื้นที่เปียกชื้น ตอนกลางวันจะอยู่นิ่ง ๆ ใต้เงาไม้ในป่า ปล่อยผงพิษออกจากหัวได้",
		id: "Shroomish menyukai tempat lembap. Selama siang hari, ia hanya terdiam di balik bayangan pohon di hutan. Pokémon ini mengeluarkan bubuk beracun dari kepalanya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吸取",
			th: "ดูดซับ",
			id: "Menyerap"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「10」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [10]",
			id: "Pulihkan HP Pokémon ini sejumlah 10."
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card