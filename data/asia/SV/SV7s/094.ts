import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โซโรอาร์ค",
		id: "Zoroark"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		th: "มีพลังที่สามารถหลอกคนจำนวนมากได้พร้อม ๆ กัน จะสร้างภาพลวงตาขึ้นมาเพื่อปกป้องรัง",
		id: "Zoroark memiliki kekuatan untuk mengelabui orang banyak secara bersamaan. Pokémon ini memperlihatkan pemandangan ilusi untuk melindungi sarangnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "โจรกรรมลวงตา",
			id: "Pembajakan Fantom"
		},

		effect: {
			th: "แดเมจจะเท่ากับจำนวน [โปเกมอน【ex】 /【V】] บนกระดานฝ่ายตรงข้าม x60",
			id: "Serangan ini memberikan kerusakan sejumlah 60 untuk tiap Pokémon {ex}/{V} di Arena lawan."
		},

		damage: "60×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "กรงเล็บฉีกร่าง",
			id: "Cakar Penyayat"
		},

		damage: 110,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card