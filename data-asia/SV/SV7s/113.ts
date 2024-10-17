import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ไดโอโด",
		id: "Copperajah"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 200,
	types: ["Metal"],

	description: {
		th: "มีความหยิ่งทะนงสูงและเอาใจยาก ตัวที่มีผิวหนังสีเขียวสดใสจะเป็นที่เคารพนับถือของพวกพ้อง",
		id: "Pokémon ini memiliki harga diri tinggi dan egois. Copperajah yang memiliki kulit berwarna hijau cerah dihormati oleh sesamanya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			th: "ร่างใหญ่มหึมา",
			id: "Tubuh Sangat Besar"
		},

		effect: {
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่บนตำแหน่งต่อสู้ ฝ่ายตรงข้ามจะนำการ์ดสเตเดียมจากบนมือออกมาไม่ได้",
			id: "Selama Pokémon ini ada di Arena Bertarung, lawan tidak dapat memasukkan Stadium dari Kartu Pegangan."
		}
	}],

	attacks: [{
		name: {
			th: "โนสแลเรียท",
			id: "Nose Lariat"
		},

		effect: {
			th: "หากต้องการ การโจมตีนี้จะเพิ่มแดเมจอีก 100 เมื่อทำเช่นนั้นแล้ว เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			id: "Pemain dapat membuat kerusakan yang diberikan bertambah sejumlah 100. Jika dilakukan, pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: "130+",
		cost: ["Metal", "Metal", "Metal", "Colorless"]
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