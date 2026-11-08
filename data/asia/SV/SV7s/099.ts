import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เบโรบา",
		'id-id': "Impidimp"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'th-th': "อาศัยอยู่รวมกันเป็นฝูง มักจะกลั่นแกล้งและหลอกลวงกันเองเพื่อฝึกฝีมือ",
		'id-id': "Impidimp hidup membentuk kelompok dan saling berbuat usil untuk mengasah kemampuan mereka."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ฝ่ามือตบ",
			'id-id': "Tampar"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "กรงเล็บฉีกร่าง",
			'id-id': "Cakar Penyayat"
		},

		damage: 40,
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