import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โอราทิฟ",
		'id-id': "Maschiff"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'th-th': "ขากรรไกรและเขี้ยวที่พัฒนาจนแข็งแกร่งสามารถบดขยี้หินได้ ไขมันที่หนาทำให้มีพลังป้องกันที่ดีเยี่ยม",
		'id-id': "Rahang dan taring Maschiff yang telah berkembang memiliki kekuatan untuk mengunyah habis batu. Lemak tebal Pokémon ini memiliki kekuatan pertahanan yang luar biasa."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "กัดขย้ำ",
			'id-id': "Mengunyah"
		},

		effect: {
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		},

		damage: 30,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card