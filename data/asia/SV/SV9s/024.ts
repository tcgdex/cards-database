import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "บูเบอร์",
		id: "Magmar"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		th: "ค้นพบที่บริเวณใกล้กับปากปล่องภูเขาไฟ พ่นไฟออกมาจากปากได้ และ ร่างกายมันมีอุณหภูมิสูงถึง 1200 องศาเซลเซียส",
		id: "Ia ditemukan di dekat kawah gunung berapi. Ia memuntahkan api dari mulut dan suhu tubuhnya pun bisa mencapai 1200 ℃."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เพลิงประลัยกัลป์",
			id: "Kobaran Api Penghangus"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม เป็นสภาวะ[ไหม้]",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		},

		damage: 30,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card