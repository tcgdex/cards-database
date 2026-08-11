import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ทอร์เนลอส",
		'id-id': "Tornadus"
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'th-th': "ส่วนล่างของร่างกายมีกลุ่มพลังงานที่ดูเหมือนก้อนเมฆปกคลุมอยู่ บินบนท้องฟ้าด้วยความเร็ว 300 กิโลเมตรต่อชั่วโมง",
		'id-id': "Bagian bawah tubuh Tornadus diselimuti tubuh energi seperti awan. Pokémon ini terbang di langit dengan kecepatan 300 km/jam."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "กำปั้น",
			'id-id': "Kepalan Tinju"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'th-th': "กำแพงลมพายุ",
			'id-id': "Barier Badai Angin"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-50]",
			'id-id': "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 50."
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
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