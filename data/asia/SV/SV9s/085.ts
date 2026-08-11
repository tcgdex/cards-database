import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ซึรุซึคิน <ของแมรี>",
		'id-id': "Scrafty <Marnie>"
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'th-th': "รวมกลุ่มกันจัดการใครก็ตามที่เข้ามาในอาณาเขตของมันให้น่วม พ่น ของเหลวกรดในร่างกายออกมาจากปากได้",
		'id-id': "Pokémon ini secara berkelompok memukul habis lawan yang memasuki wilayah teritorialnya. Ia menembakkan cairan tubuh yang asam dari mulutnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "เตะกลับหลัง",
			'id-id': "Tendangan Belakang"
		},

		damage: 40,
		cost: ["Darkness"]
	}, {
		name: {
			'th-th': "ไวลด์แท็กเกิล",
			'id-id': "Wild Tackle"
		},

		effect: {
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 30."
		},

		damage: 160,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card