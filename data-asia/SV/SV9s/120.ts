import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ไบวูลู <ของฮ็อป>",
		id: "Dubwool <Hop>"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		th: "เขาที่ยืดยาวดูสง่างามนั้นงอกขึ้นมาเพื่อดึงดูดเพศตรงข้าม ไม่เคยใช้ เป็นอาวุธต่อสู้",
		id: "Tanduk Dubwool yang gagah tumbuh hanya untuk menarik perhatian lawan jenis dan tidak pernah digunakan sebagai senjata."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			th: "ชาเลนจ์ฮอร์น",
			id: "Challenge Horn"
		},

		effect: {
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่ง ต่อสู้",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung."
		}
	}],

	attacks: [{
		name: {
			th: "พุ่งหัวชน",
			id: "Tandukan Kepala"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card