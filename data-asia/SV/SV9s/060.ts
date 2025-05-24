import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "อบูรี <ของลิเลีย>",
		id: "Cutiefly <Lillie>"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		th: "เมื่อมันจับออราที่แผ่ความสนุกของคนหรือโปเกมอนได้ มันจะเข้าไป ใกล้และใช้ปากอันยาวของมันแทงใส่ ทำให้เจ็บล่ะ",
		id: "Ketika merasakan aura menyenangkan dari manusia atau Pokémon, ia akan datang mendekat dan menyodok dengan belalainya yang panjang sehingga terasa sakit."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "อยู่นิ่ง ๆ",
			id: "Tidak Bergerak"
		},

		effect: {
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [10]",
			id: "Pulihkan HP Pokémon ini sejumlah 10."
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "I"
}

export default card