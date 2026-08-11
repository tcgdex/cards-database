import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Sigilyph",
		th: "ซิมโบลา"
	},

	illustrator: "svlt",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		id: "Sigilyph terbang di udara menggunakan kekuatan psikokinesis. Dikenal sebagai dewa pelindung kota zaman purba atau juga utusan dewa.",
		th: "บินบนท้องฟ้าด้วยพลังจิต ได้รับการเล่าขานว่าเป็นเทพหรือบริวารของ เทพที่ปกปักรักษาเมืองสมัยโบราณ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Double Draw",
			th: "ดับเบิลดรอว์"
		},

		effect: {
			id: "Ambil 2 kartu dari atas Deck sendiri.",
			th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา"
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Psikokinesis",
			th: "จิตตานุภาพ"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh.",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม เป็นสภาวะ[ชา]"
		},

		damage: 60,
		cost: ["Psychic", "Colorless", "Colorless"]
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
	regulationMark: "H"
}

export default card