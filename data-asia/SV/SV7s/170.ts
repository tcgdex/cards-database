import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เฮลการ์"
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		th: "โปเกมอนที่ได้ยินเสียงหอนชวนขนลุกของมันจะสั่นกลัวและรีบกลับรังของตนอย่างรวดเร็ว"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "กัดติด"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "บาร์กเอาต์"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนที่ได้รับท่าต่อสู้นี้ใช้จะถูก [-100]"
		},

		damage: 100,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card