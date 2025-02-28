import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Alolan Exeggutor ex",
		th: "อโลลา นัชชีex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 300,
	types: ["Dragon"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Tropical Fever",
			th: "ทรอปิคัลฟีเวอร์"
		},

		effect: {
			id: "Pilih sesukanya Energi Dasar dari Kartu Pegangan sendiri, lalu kenakan sesukanya pada Pokémon sendiri.",
			th: "เลือกการ์ดพลังงานพื้นฐานจากบนมือฝ่ายเราตามจำนวนที่ชอบ ติดที่โปเกมอน ฝ่ายเราตามชอบ"
		},

		damage: 150,
		cost: ["Grass", "Water"]
	}, {
		name: {
			id: "Swinging Sphene",
			th: "สฟีนส่ายไปมา"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, Pokémon Basic di Arena Bertarung lawan KO. Jika hasilnya sisi belakang, pilih 1 Pokémon Basic di Cadangan lawan, Pokémon tersebut KO.",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว ทำให้โปเกมอน[พื้นฐาน]บนตำแหน่งต่อสู้ฝ่ายตรงข้าม [หมดสภาพ] ถ้าออกก้อย เลือกโปเกมอน[พื้นฐาน]บนเบนช์ฝ่ายตรงข้าม 1 ตัว ทำให้[หมดสภาพ]"
		},

		cost: ["Grass", "Water", "Fighting"]
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card