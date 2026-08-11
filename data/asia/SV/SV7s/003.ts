import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ลิลีลา",
		'id-id': "Lileep"
	},

	illustrator: "Ounishi",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'th-th': "โปเกมอนที่ฟื้นสภาพจากฟอสซิล อาศัยอยู่ใต้ทะเลอุ่นราว 1 ร้อยล้านปีก่อน",
		'id-id': "Pokémon yang direstorasi dari fosil. Lileep hidup di laut hangat sekitar 100 juta tahun yang lalu."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "มัดยึด",
			'id-id': "Menjerat"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			'id-id': "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 50,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card