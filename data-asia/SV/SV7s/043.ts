import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เอเลคิเบิล",
		id: "Electivire"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	description: {
		th: "กดปลายหางของมันเข้ากับอีกฝ่าย แล้วส่งกระแสไฟฟ้าที่มีแรงดันไฟฟ้าสูงกว่า 2 หมื่นโวลต์เข้าไปในร่างของอีกฝ่ายในชั่วพริบตา",
		id: "Ia mengirimkan aliran listrik bertegangan tinggi sebesar lebih dari 20 ribu volt sesaat setelah menekankan ujung ekornya ke lawan."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "อิเล็กทริกสลัก",
			id: "Electroslug"
		},

		damage: 40,
		cost: ["Lightning"]
	}, {
		name: {
			th: "ไลท์นิงดาวน์",
			id: "Lightning Down"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนฝ่ายเราทุกตัว จะใช้ท่าต่อสู้ไม่ได้ (รวมถึงโปเกมอนที่เพิ่งออกมาใหม่บนกระดาน)",
			id: "Pada giliran sendiri berikutnya, semua Pokémon sendiri tidak dapat menggunakan serangan. (Termasuk Pokémon yang baru dimasukkan ke Arena.)"
		},

		damage: 220,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card