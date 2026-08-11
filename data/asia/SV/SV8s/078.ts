import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Azelf",
		th: "อักนอม"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		id: "Dikenal sebagai Dewa Tekad. Azelf terus tidur di dasar danau untuk menjaga keseimbangan dunia.",
		th: "ถูกเรียกว่าเป็นเทพแห่งเจตจำนง จะนอนอยู่ใต้ก้นทะเลสาบเพื่อรักษา สมดุลของโลก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Mind Kinesis",
			th: "มายด์คิเนซิส"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki semua Pokémon lawan.",
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนฝ่ายตรงข้ามทุกตัว x10"
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