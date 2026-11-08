import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Miraidon",
		'th-th': "มิไรดอน"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'id-id': "Tampaknya Miraidon tertera di buku kuno dengan nama Iron Serpent. Dikabarkan Pokémon ini mengubah tanah lapang menjadi abu dengan petir.",
		'th-th': "ดูเหมือนว่าจะเป็นนาคเหล็กซึ่งมีชื่อในบันทึกเก่าแก่ ว่ากันว่ามันใช้ สายฟ้าทำให้ผืนดินกลายเป็นเถ้าถ่าน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Protect Code",
			'th-th': "โพรเทกโค้ด"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, semua Pokémon Futur sendiri tidak menerima kerusakan akibat serangan dari Pokémon {ex}. Jika Pokémon ini meninggalkan Arena Bertarung, efek ini menjadi tidak berlaku.",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอน [อนาคต] ฝ่ายเราทุกตัว จะไม่ได้รับ แดเมจของท่าต่อสู้จาก [โปเกมอน【ex】] เมื่อโปเกมอนนี้ออกจากตำแหน่งต่อสู้ เอฟเฟกต์นี้จะหายไป"
		},

		damage: 40,
		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			'id-id': "Thunder Claw",
			'th-th': "ธันเดอร์คลอว์"
		},

		damage: 100,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card