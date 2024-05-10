import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "มูแลนด์",
		id: "Stoutland"
	},

	illustrator: "Keisin",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	description: {
		th: "เป็นโปเกมอนที่ภาคภูมิใจกับหนวดของตนเอง ว่ากันว่าความเด่นด้อยระหว่างพวกพ้องจะตัดสินกันจากความยาวของหนวดนั้น",
		id: "Pokémon ini bangga atas kumisnya yang gagah. Kabarnya panjang kumis tersebut menentukan siapa yang lebih unggul di antara sesama Stoutland."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			th: "ง่ำ ๆ ตระหนกตกใจ",
			id: "Panik Keriuk Keriuk"
		},

		effect: {
			th: "แดเมจจะเท่ากับจำนวนพลังงานสำหรับ[หนี]ของโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x50",
			id: "Serangan ini memberikan kerusakan sejumlah 50 untuk tiap Energi yang dibutuhkan oleh Pokémon Bertarung lawan untuk Mundur."
		},

		damage: "50×",
		cost: ["Colorless"]
	}, {
		name: {
			th: "เขี้ยวคม",
			id: "Taring Tajam"
		},

		damage: 140,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card