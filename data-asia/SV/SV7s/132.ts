import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ทอร์เนลอส",
		id: "Tornadus"
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		th: "ส่วนล่างของร่างกายมีกลุ่มพลังงานที่ดูเหมือนก้อนเมฆปกคลุมอยู่ บินบนท้องฟ้าด้วยความเร็ว 300 กิโลเมตรต่อชั่วโมง",
		id: "Bagian bawah tubuh Tornadus diselimuti tubuh energi seperti awan. Pokémon ini terbang di langit dengan kecepatan 300 km/jam."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "กำปั้น",
			id: "Kepalan Tinju"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "กำแพงลมพายุ",
			id: "Barier Badai Angin"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-50]",
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 50."
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