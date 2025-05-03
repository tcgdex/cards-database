import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Palossand ex",
		th: "ชิโรเดซึนะex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Neraka Pasir",
			th: "สุสานทรายดูด"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur.",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้"
		},

		damage: 160,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			id: "Baryte Jail",
			th: "แบไรต์จองจำ"
		},

		effect: {
			id: "Letakkan Token Kerusakan pada semua Pokémon Cadangan lawan hingga sisa HP masing-masing Pokémon tersebut menjadi sejumlah 100.",
			th: "วางตัวนับแดเมจ บนโปเกมอนบนเบนช์ฝ่ายตรงข้ามทุกตัว ให้ HP ของแต่ละตัว เหลือเท่ากับ [100]"
		},

		cost: ["Water", "Psychic", "Fighting"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card