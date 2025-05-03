import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Paldean Tauros",
		th: "พัลเดีย เคนเทารอส"
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		id: "Tauros ini diberi nama Varian Api karena mengembuskan napas bersuhu tinggi dari hidungnya. Pokémon ini mengikat 3 ekornya.",
		th: "เพราะพ่นลมหายใจที่มีอุณหภูมิสูงจึงถูกตั้งชื่อว่าพันธุ์อัคคี หางทั้งสาม พันกันเป็นเกลียว"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tendangan Belakang",
			th: "เตะกลับหลัง"
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			id: "Serudukan Tenaga Dalam",
			th: "ฮึดสู้กระแทก"
		},

		effect: {
			id: "Jika Pokémon Bertarung lawan adalah Pokémon Stage 1, kerusakan yang diberikan bertambah sejumlah 90.",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นโปเกมอน[ร่าง1] การโจมตีนี้จะ เพิ่มแดเมจอีก 90"
		},

		damage: "90+",
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card