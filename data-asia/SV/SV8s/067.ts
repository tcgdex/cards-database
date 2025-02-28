import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Miraidon",
		th: "มิไรดอน"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		id: "Tampaknya Miraidon tertera di buku kuno dengan nama Iron Serpent. Dikabarkan Pokémon ini mengubah tanah lapang menjadi abu dengan petir.",
		th: "ดูเหมือนว่าจะเป็นนาคเหล็กซึ่งมีชื่อในบันทึกเก่าแก่ ว่ากันว่ามันใช้ สายฟ้าทำให้ผืนดินกลายเป็นเถ้าถ่าน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Protect Code",
			th: "โพรเทกโค้ด"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, semua Pokémon Futur sendiri tidak menerima kerusakan akibat serangan dari Pokémon {ex}. Jika Pokémon ini meninggalkan Arena Bertarung, efek ini menjadi tidak berlaku.",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอน [อนาคต] ฝ่ายเราทุกตัว จะไม่ได้รับ แดเมจของท่าต่อสู้จาก [โปเกมอน【ex】] เมื่อโปเกมอนนี้ออกจากตำแหน่งต่อสู้ เอฟเฟกต์นี้จะหายไป"
		},

		damage: 40,
		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			id: "Thunder Claw",
			th: "ธันเดอร์คลอว์"
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