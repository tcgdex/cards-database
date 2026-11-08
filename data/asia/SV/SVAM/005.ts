import { Card } from "models/database/card"
import Set from "../SVAM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蒂蕾喵",
		'th-th': "เนียโรเต",
		'id-id': "Floragato"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "會靈巧操控長長的體毛下隱藏的藤蔓，將堅硬的 花苞甩向敵人猛打。",
		'th-th': "ใช้เถาวัลย์ที่ซ่อนอยู่ภายใต้ขนตามร่างกายที่มีขนาดยาวได้อย่างคล่องแคล่ว และใช้ดอกตูมแข็ง ๆ ฟาดฟันศัตรู",
		'id-id': "Floragato mengendalikan sulur ranting yang tersembunyi di bawah bulu panjangnya dengan mahir, lalu membanting kuncup keras ke lawan."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "劈開",
			'th-th': "ฟันแหลก",
			'id-id': "Menyayat"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "綠葉舞步",
			'th-th': "ลีฟสเต็ป",
			'id-id': "Leaf Step"
		},

		damage: 60,
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