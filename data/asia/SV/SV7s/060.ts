import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ฟูวันเต",
		'id-id': "Drifloon"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'th-th': "เนื่องจากมันดูล่องลอยอย่างไร้จุดหมาย จึงถูกเรียกขานในนิทานเก่าแก่ว่าเป็นเครื่องหมายบอกทางวิญญาณที่หลงทาง",
		'id-id': "Karena Drifloon terbang dan melayang tanpa tujuan, ada dongeng yang menceritakan Pokémon ini sebagai pemandu arah roh yang tersesat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "พอง",
			'id-id': "Membesar"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-10]",
			'id-id': "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 10."
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card