import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "พาม็อต",
		id: "Pawmo"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		th: "ใช้ศิลปะการต่อสู้ที่มีเอกลักษณ์โดยการใช้ฝ่ามือจู่โจมไปพลางปล่อยไฟฟ้าจากอุ้งมืออาบคู่ต่อสู้",
		id: "Pawmo bertarung menggunakan seni bela diri yang khas. Sambil menambahkan pukulan dengan telapak tangannya, Pokémon ini memberikan serangan listrik dari bantalan tangannya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ช็อกไฟฟ้า",
			id: "Sengatan Listrik"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			th: "เฮดโบลต์",
			id: "Head Bolt"
		},

		damage: 70,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card