import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "สปินโรตอม",
		id: "Rotom Kipas"
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		th: "เครื่องใช้ไฟฟ้าในครัวเรือนที่โรตอมสามารถเข้าไปได้มีหลายชิ้น แต่เครื่องใช้ไฟฟ้าชิ้นแรกที่ได้รับการพัฒนาคือพัดลม",
		id: "Terdapat beberapa perabotan elektronik yang dapat dimasuki Rotom, namun kipas angin adalah perabotan yang paling pertama dikembangkan."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			th: "แฟนคอล",
			id: "Fan Call"
		},

		effect: {
			th: "ใช้ได้ 1 ครั้งในเทิร์นแรกสุดของฝ่ายเราเท่านั้น เลือกการ์ดโปเกมอน[ไร้สี]ที่มี HP น้อยกว่าหรือเท่ากับ [100] ได้สูงสุด 3 ใบ จากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด เทิร์นนี้ ถ้าใช้ [แฟนคอล] ใบอื่นไปแล้ว จะใช้ความสามารถนี้ไม่ได้",
			id: "Hanya dapat digunakan 1 kali pada giliran pertama sendiri. Pilih paling banyak 3 lembar Pokémon {Bening} dengan HP 100 atau kurang dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck. Jika pada giliran ini, Fan Call lainnya telah digunakan, Ability ini tidak dapat digunakan."
		}
	}],

	attacks: [{
		name: {
			th: "ลงจอดประจัญบาน",
			id: "Pendaratan Menyerang"
		},

		effect: {
			th: "ถ้าไม่มีการ์ดสเตเดียมอยู่บนกระดาน ท่าต่อสู้นี้จะล้มเหลว",
			id: "Jika tidak ada Stadium di Arena, serangan ini gagal."
		},

		damage: 70,
		cost: ["Colorless"]
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