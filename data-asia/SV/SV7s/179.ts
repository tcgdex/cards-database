import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โยนัวร์"
	},

	illustrator: "James Turner",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		th: "ไปกลับระหว่างโลกนี้และโลกหลังความตาย ผู้คนต่างหวาดกลัวเพราะเชื่อว่ามันจะดูดกลืนวิญญาณเร่ร่อนและพาไปด้วย"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			th: "ระเบิดต้องสาป"
		},

		effect: {
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เมื่อใช้แล้ว จะทำให้โปเกมอนนี้[หมดสภาพ] วางตัวนับแดเมจ 13 ตัว บนโปเกมอนฝ่ายตรงข้าม 1 ตัว"
		}
	}],

	attacks: [{
		name: {
			th: "จับเงา"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้"
		},

		damage: 150,
		cost: ["Psychic", "Psychic", "Colorless"]
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
	regulationMark: "H"
}

export default card