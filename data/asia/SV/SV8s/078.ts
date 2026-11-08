import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Azelf",
		'th-th': "อักนอม"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'id-id': "Dikenal sebagai Dewa Tekad. Azelf terus tidur di dasar danau untuk menjaga keseimbangan dunia.",
		'th-th': "ถูกเรียกว่าเป็นเทพแห่งเจตจำนง จะนอนอยู่ใต้ก้นทะเลสาบเพื่อรักษา สมดุลของโลก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Mind Kinesis",
			'th-th': "มายด์คิเนซิส"
		},

		effect: {
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki semua Pokémon lawan.",
			'th-th': "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนฝ่ายตรงข้ามทุกตัว x10"
		},

		damage: "10+",
		cost: ["Psychic", "Colorless"]
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