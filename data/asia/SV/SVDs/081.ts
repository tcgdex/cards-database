import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "ยาเรยูตัน",
		id: "Oranguru"
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		th: "เคยถูกมองว่าเป็นมนุษย์ เพราะท่าทีที่คอยออกคำสั่งแก่โปเกมอนในป่าเรื่อย ๆ",
		id: "Karena sosoknya yang selalu memberikan perintah kepada para Pokémon yang ada di hutan, Oranguru disangka sebagai manusia pada zaman dahulu."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "พัดนำทัพของจอมวางแผน",
			id: "Kipas Perang Ahli Strategi"
		},

		effect: {
			th: "เลือกท่าต่อสู้ที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมี 1 ท่า เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะใช้ท่าต่อสู้ที่ถูกเลือกไว้ไม่ได้",
			id: "Pilih 1 serangan yang dimiliki Pokémon Bertarung lawan. Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat menggunakan serangan yang telah dipilih."
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			th: "ซูเปอร์โทรจิต",
			id: "Psikokinesis Super"
		},

		damage: 80,
		cost: ["Psychic", "Colorless", "Colorless"]
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
	regulationMark: "G"
}

export default card