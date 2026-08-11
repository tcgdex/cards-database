import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ยันยันมา",
		id: "Yanma"
	},

	illustrator: "svlt",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		th: "กระพือปีกด้วยความเร็วสูง บินอยู่กับที่พลางตรวจตราอาณาเขตของตน",
		id: "Ia mengepakkan sayapnya dengan kecepatan tinggi dan mengawasi wilayah kekuasaannya sambil berhenti di udara."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เป่ากระเด็น",
			id: "Angin Penghempas"
		},

		effect: {
			th: "สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอนบนเบนช์ {ฝ่ายตรงข้าม เลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้}",
			id: "Tukar Pokémon Bertarung lawan dengan Pokémon Cadangan. [Pokémon yang akan dimasukkan ke Arena Bertarung dipilih oleh lawan.]"
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "ขนปีกแหลมคม",
			id: "Bulu Tajam"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
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
	regulationMark: "I"
}

export default card