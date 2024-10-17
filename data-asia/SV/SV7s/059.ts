import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โยนัวร์",
		id: "Dusknoir"
	},

	illustrator: "danciao",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		th: "ไปกลับระหว่างโลกนี้และโลกหลังความตาย ผู้คนต่างหวาดกลัวเพราะเชื่อว่ามันจะดูดกลืนวิญญาณเร่ร่อนและพาไปด้วย",
		id: "Pokémon yang datang dan pergi ke dunia fana dan alam baka. Konon ia mengisap roh gentayangan dan mengangkutnya sehingga ditakuti."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			th: "ระเบิดต้องสาป",
			id: "Cursed Bomb"
		},

		effect: {
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เมื่อใช้แล้ว จะทำให้โปเกมอนนี้[หมดสภาพ] วางตัวนับแดเมจ 13 ตัว บนโปเกมอนฝ่ายตรงข้าม 1 ตัว",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pokémon ini KO jika menggunakan Ability ini. Letakkan 13 Token Kerusakan pada 1 Pokémon lawan."
		}
	}],

	attacks: [{
		name: {
			th: "จับเงา",
			id: "Pengikat Bayangan"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 150,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card