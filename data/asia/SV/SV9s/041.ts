import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "มารุมายน์ <ของนันจาโม>",
		'id-id': "Electrode <Mistika>"
	},

	illustrator: "GOTO minori",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		'th-th': "ยิ่งสะสมพลังงานไฟฟ้ามากเท่าไหร่ยิ่งเคลื่อนไหวได้เร็ว แต่ก็จะ ระเบิดง่ายขึ้นด้วย",
		'id-id': "Makin banyak energi listrik yang disimpan, Electrode dapat bergerak dengan kecepatan tinggi. Namun, Pokémon ini juga menjadi lebih mudah untuk meledak."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "ระเบิดตึ้กตั้ก",
			'id-id': "Bom Dag Dig Dug"
		},

		effect: {
			'th-th': "ทำแดเมจ 100 กับโปเกมอนนี้ ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอน บนตำแหน่งต่อสู้ฝ่ายตรงข้าม[หมดสภาพ]",
			'id-id': "Pokémon ini menerima kerusakan sejumlah 100. Lempar koin 1 kali. Jika hasilnya sisi depan, Pokémon Bertarung lawan KO."
		},

		cost: ["Lightning", "Lightning"]
	}, {
		name: {
			'th-th': "ไลท์นิงบอล",
			'id-id': "Lightning Ball"
		},

		damage: 100,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "I"
}

export default card