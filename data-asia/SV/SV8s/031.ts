import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Skeledirge",
		th: "ลาวด์โบน"
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],

	description: {
		id: "Suara nyanyian lembut Skeledirge menenangkan jiwa orang-orang yang mendengarnya. Pokémon ini membakar hangus musuhnya dengan api bersuhu 3000 ℃.",
		th: "เสียงร้องเพลงที่อ่อนโยนจะช่วยเยียวยาจิตวิญญาณของผู้ฟัง เผาคู่ต่อสู้ ให้เป็นจุณด้วยเปลวไฟที่ร้อน 3000 องศาเซลเซียส"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			id: "Bebal",
			th: "ไม่รู้ตัว"
		},

		effect: {
			id: "Pokémon ini tidak menerima efek akibat serangan yang digunakan oleh Pokémon lawan.",
			th: "โปเกมอนนี้ จะไม่ได้รับเอฟเฟกต์ของท่าต่อสู้ที่โปเกมอนฝ่ายตรงข้ามใช้"
		}
	}],

	attacks: [{
		name: {
			id: "Flare Recital",
			th: "แฟลร์รีไซทัล"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 20 untuk tiap Pokémon Cadangan kedua pemain.",
			th: "แดเมจจะเพิ่มตามจำนวนโปเกมอนบนเบนช์ของทั้งสองฝ่าย x20"
		},

		damage: "60+",
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card