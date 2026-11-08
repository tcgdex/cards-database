import { Card } from "models/database/card"
import Set from "../SVAM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熱帶龍",
		'th-th': "โทรพิอุส",
		'id-id': "Tropius"
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'zh-tw': "棲息在熱帶叢林裡。脖子上的果實香甜美味。 每年會結果２次。",
		'th-th': "อาศัยอยู่ในป่าเขตร้อน เครือผลที่คอรสชาติหวานอร่อย 1 ปีจะออกผลแค่ 2 ครั้ง",
		'id-id': "Tropius hidup di hutan tropis. Tandan di leher Pokémon ini rasanya manis dan lezat, dan berbuah 2 kali dalam 1 tahun."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "現摘水果",
			'th-th': "ผลไม้เก็บสด ๆ",
			'id-id': "Buah-buahan Baru Dipetik"
		},

		effect: {
			'zh-tw': "將自己的1隻備戰寶可夢恢復「60」HP。",
			'th-th': "ฟื้นฟู HP ของโปเกมอนบนเบนช์ฝ่ายเรา 1 ตัว [60]",
			'id-id': "Pulihkan HP 1 Pokémon Cadangan sendiri sejumlah 60."
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "飛葉快刀",
			'th-th': "คัตเตอร์ใบไม้",
			'id-id': "Daun Pemotong"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card