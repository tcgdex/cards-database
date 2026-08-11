import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "มาตาโดกัซ",
		id: "Weezing"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		th: "เมื่อเจือจางแก๊สพิษที่บรรจุอยู่ในร่างกายของมันได้มากที่สุด จะได้ น้ำหอมชั้นเยี่ยม",
		id: "Parfum berkualitas terbaik dapat dihasilkan jika gas beracun yang terkandung dalam tubuhnya dikurangi hingga mendekati batas kadarnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "แก๊สฟุ้งตลบ",
			id: "Dipenuhi Gas"
		},

		effect: {
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: 30,
		cost: ["Darkness"]
	}, {
		name: {
			th: "เครซีบอมบ์",
			id: "Crazy Bomb"
		},

		effect: {
			th: "ในเทิร์นก่อนของฝ่ายเรา ถ้าโปเกมอนนี้ใช้ [แก๊สฟุ้งตลบ] ไปแล้ว การโจมตีนี้ จะเพิ่มแดเมจอีก 120",
			id: "Jika pada giliran sendiri sebelumnya, Pokémon ini telah menggunakan Dipenuhi Gas, kerusakan yang diberikan bertambah sejumlah 120."
		},

		damage: "50+",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card