import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ฮิบานี",
		'id-id': "Scorbunny"
	},

	illustrator: "Cona Nitanda",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'th-th': "อุ้งเท้าที่มีพลังงานไฟสะสมอยู่จะมีอุณหภูมิสูงและสร้างความเสียหายรุนแรงให้กับศัตรู",
		'id-id': "Energi api yang terkumpul di bantalan kaki Scorbunny menjadi bersuhu tinggi dan menyebabkan kerusakan besar ke lawan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "เคลื่อนที่ความไวแสง",
			'id-id': "Serangan Cepat"
		},

		effect: {
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 10",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 10."
		},

		damage: "10+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card