import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "พาโม",
		'id-id': "Pawmi"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],

	description: {
		'th-th': "อุ้งมือคืออวัยวะปล่อยกระแสไฟฟ้า หลังจากที่ลุกขึ้นยืนด้วยขาหลังอย่างทุลักทุเลก็จะปล่อยไฟฟ้าออกมาจากอุ้งมือ",
		'id-id': "Bantalan tangannya adalah organ pelepasan listrik. Setelah berhasil berdiri dengan kaki belakangnya, Pawmi melepaskan serangan listrik dari telapak tangannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ช็อกเล็ก ๆ",
			'id-id': "Sengatan Mini"
		},

		effect: {
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card