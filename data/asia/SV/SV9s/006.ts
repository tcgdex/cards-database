import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ยันยันมา",
		'id-id': "Yanma"
	},

	illustrator: "svlt",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'th-th': "กระพือปีกด้วยความเร็วสูง บินอยู่กับที่พลางตรวจตราอาณาเขตของตน",
		'id-id': "Ia mengepakkan sayapnya dengan kecepatan tinggi dan mengawasi wilayah kekuasaannya sambil berhenti di udara."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "เป่ากระเด็น",
			'id-id': "Angin Penghempas"
		},

		effect: {
			'th-th': "สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอนบนเบนช์ {ฝ่ายตรงข้าม เลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้}",
			'id-id': "Tukar Pokémon Bertarung lawan dengan Pokémon Cadangan. [Pokémon yang akan dimasukkan ke Arena Bertarung dipilih oleh lawan.]"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ขนปีกแหลมคม",
			'id-id': "Bulu Tajam"
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