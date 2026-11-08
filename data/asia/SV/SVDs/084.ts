import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ฮากาด็อกex",
		'id-id': "Houndstone ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'th-th': "กัด",
			'id-id': "Menggerogoti Erat-erat"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			'id-id': "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 30,
		cost: ["Psychic"]
	}, {
		name: {
			'th-th': "เยี่ยมหลุมศพ",
			'id-id': "Berkabung"
		},

		effect: {
			'th-th': "แดเมจจะเพิ่มตามจำนวนการ์ดโปเกมอน[พลังจิต]ที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายเรา x10",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap lembar Pokémon {Psychic} yang ada di Trash sendiri."
		},

		damage: "160+",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card