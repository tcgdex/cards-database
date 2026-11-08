import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Espathra",
		'th-th': "เควสพัตรา"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'id-id': "Espathra mengeluarkan kekuatan psikokinesis dari celah embel-embel warna-warninya, lalu berlari dengan kecepatan 200 km/jam.",
		'th-th': "ปล่อยพลังจิตออกจากช่องว่างของจีบระบายหลากสีสันและวิ่งด้วยความ เร็ว 200 กิโลเมตรต่อชั่วโมง"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Mystic Eye",
			'th-th': "มิสติกอาย"
		},

		effect: {
			'id-id': "Pilih 1 Pokémon lawan yang telah berevolusi, lalu turunkan tingkat evolusinya dengan melepas 1 lembar kartu evolusi. Kartu yang dilepas dikembalikan ke Kartu Pegangan lawan.",
			'th-th': "เลือกโปเกมอนฝ่ายตรงข้ามที่วิวัฒนาการแล้ว 1 ตัว ถอด [การ์ดวิวัฒนาการ] 1 ใบออกและทำให้วิวัฒนาการย้อนกลับ การ์ดที่ถอดออกมา นำกลับขึ้นมือฝ่าย ตรงข้าม"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Spiral Drain",
			'th-th': "สไปรัลเดรน"
		},

		effect: {
			'id-id': "Pulihkan HP Pokémon ini sejumlah 30.",
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [30]"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card