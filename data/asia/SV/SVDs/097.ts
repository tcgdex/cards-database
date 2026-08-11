import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เฮลการ์ex",
		'id-id': "Houndoom ex"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'th-th': "กรงเล็บทมิฬ",
			'id-id': "Evil Claw"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอน[พื้นฐาน]ที่ได้รับท่าต่อสู้นี้ จะใช้ท่าต่อสู้ไม่ได้",
			'id-id': "Pada giliran lawan berikutnya, Pokémon Basic yang menerima serangan ini tidak dapat menggunakan serangan."
		},

		damage: 90,
		cost: ["Darkness", "Darkness"]
	}, {
		name: {
			'th-th': "คมเขี้ยวไล่ล่า",
			'id-id': "Hound Fang"
		},

		effect: {
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 30."
		},

		damage: 220,
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card