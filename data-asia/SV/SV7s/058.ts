import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ซามาโยรุ",
		id: "Dusclops"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		th: "ว่ากันว่า นัยน์ตาเดียวสีแดงฉานที่ลุกไหม้อยู่ในตัวคือร่างที่แท้จริงของซามาโยรุ แต่ก็ไม่มีใครเคยเห็น",
		id: "Dikatakan bahwa mata merah padam tunggal yang sedang terbakar di dalam tubuhnya merupakan tubuh aslinya, tetapi tidak ada yang pernah melihatnya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			th: "ระเบิดต้องสาป",
			id: "Cursed Bomb"
		},

		effect: {
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เมื่อใช้แล้ว จะทำให้โปเกมอนนี้[หมดสภาพ] วางตัวนับแดเมจ 5 ตัว บนโปเกมอนฝ่ายตรงข้าม 1 ตัว",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pokémon ini KO jika menggunakan Ability ini. Letakkan 5 Token Kerusakan pada 1 Pokémon lawan."
		}
	}],

	attacks: [{
		name: {
			th: "ลูกไฟวิญญาณ",
			id: "Api Hantu"
		},

		damage: 50,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card