import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Dialga",
		th: "ดีอัลกา"
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		id: "Dialga merupakan Pokémon yang memiliki legenda yang isinya waktu mulai bergerak saat ia lahir.",
		th: "ดีอัลกาเป็นโปเกมอนที่มีตำนานกล่าวไว้ว่าเมื่อถือกำเนิดขึ้นมา เวลา จะเริ่มขยับ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Time Control",
			th: "ไทม์คอนโทรล"
		},

		effect: {
			id: "Pilih 2 kartu sesukanya dari Deck sendiri. Kocok sisa Deck, tukar urutan kartu yang telah dipilih sesukanya, lalu kembalikan ke atas Deck.",
			th: "เลือกการ์ดที่ชอบ 2 ใบจากสำรับการ์ดฝ่ายเรา สับสำรับการ์ดที่เหลือ เรียง การ์ดที่เลือกตามลำดับที่ชอบ ใส่กลับไปด้านบนของสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Buster Tail",
			th: "บัสเตอร์เทล"
		},

		damage: 160,
		cost: ["Psychic", "Metal", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card