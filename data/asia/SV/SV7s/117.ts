import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "มิมิซึซึex",
		id: "Orthworm ex"
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			th: "เอาคืนตุ้บตั้บ",
			id: "Serangan Balik Gedebak-gedebuk"
		},

		effect: {
			th: "เมื่อโปเกมอนนี้ ได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม วางตัวนับแดเมจบนโปเกมอนที่ใช้ท่าต่อสู้ ตามจำนวนพลังงาน[โลหะ]ที่ติดอยู่กับโปเกมอนนี้ x2 ตัว",
			id: "Saat Pokémon ini menerima kerusakan akibat serangan dari Pokémon lawan, letakkan 2 Token Kerusakan untuk tiap Energi {Logam} yang dikenakan pada Pokémon ini pada Pokémon yang telah menggunakan serangan."
		}
	}],

	attacks: [{
		name: {
			th: "ปิดกั้นด้วยศิลา",
			id: "Segel Batu"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 150,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card