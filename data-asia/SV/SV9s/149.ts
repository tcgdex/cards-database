import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ไทไคเด็น <ของนันจาโม>",
		id: "Kilowattrel <Mistika>"
	},

	illustrator: "Terada Tera",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		th: "พองถุงคอเพื่อเพิ่มกระแสไฟฟ้า โบยบินตามสายลมเป็นระยะทาง 700 กิโลเมตรใน 1 วัน"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			th: "แฟลชดรอว์",
			id: "Flash Draw"
		},

		effect: {
			th: "ในเทิร์นฝ่ายเรา ถ้าทิ้ง [พลังงานพื้นฐาน[สายฟ้า]] ที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ที่ตำแหน่งทิ้งการ์ด ใช้ได้ 1 ครั้ง จั่วการ์ดจากสำรับการ์ด จนได้การ์ดบนมือ ฝ่ายเราเป็น 6 ใบ",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika membuang 1 Energi Dasar {Listrik} yang dikenakan pada Pokémon ini ke Trash. Ambil kartu dari atas Deck hingga jumlah Kartu Pegangan sendiri menjadi 6 lembar."
		}
	}],

	attacks: [{
		name: {
			th: "มัคโบลต์",
			id: "Mach Bolt"
		},

		damage: 70,
		cost: ["Lightning", "Colorless", "Colorless"]
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
	regulationMark: "I"
}

export default card