import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Cyclizar ex",
		th: "โมโตโทคาเงะex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Break Through",
			th: "เบรกทรู"
		},

		effect: {
			id: "Serangan ini juga memberikan kerusakan sejumlah 30 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 30 ด้วย {โปเกมอน บนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			id: "Zircon Road",
			th: "เซอร์คอนโรด"
		},

		effect: {
			id: "Pemain dapat mengambil 5 kartu dari atas Deck sendiri.",
			th: "หากต้องการ จั่วการ์ด 5 ใบจากสำรับการ์ดฝ่ายเรา"
		},

		damage: 180,
		cost: ["Grass", "Fire", "Psychic"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card