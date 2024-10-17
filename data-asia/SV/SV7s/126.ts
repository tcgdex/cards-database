import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โฮโฮ",
		id: "Hoothoot"
	},

	illustrator: "Yukihiro Tada",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		th: "เพราะบอกเวลาได้อย่างเที่ยงตรง จึงมีดินแดนที่เชื่อว่ามันเป็นเทพแห่งปัญญาผู้รู้ซึ้งถึงสัจจะของโลก",
		id: "Dikarenakan ia dapat memberitahukan waktu dengan tepat, terdapat negara yang memuja Pokémon ini sebagai Dewa Kebijaksanaan yang maha tahu tentang kebenaran dunia."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ตีสามครั้ง",
			id: "Menusuk Tiga Kali"
		},

		effect: {
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			id: "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card