import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Flapple",
		th: "แอปปริว"
	},

	illustrator: "GOTO minori",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],

	description: {
		id: "Pokémon ini memperbaiki apel dengan cairan tubuhnya. Apel milik Flapple yang kuat dan berpengalaman dalam pertarungan berwarna coklat tanah liat secara menyeluruh.",
		th: "ใช้ของเหลวจากร่างกายซ่อมแซมแอปเปิล แอปเปิลของผู้แข็งแกร่งที่ ผ่านศึกมานักต่อนักจะเป็นสีดินเหนียวทั้งลูก"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Sour Spit",
			th: "ซาวร์สปิต"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap Token Kerusakan yang dimiliki Pokémon Bertarung lawan.",
			th: "แดเมจจะเท่ากับจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนบนตำแหน่งต่อสู้ฝ่าย ตรงข้าม x20"
		},

		damage: "20×",
		cost: ["Colorless"]
	}, {
		name: {
			id: "Terbang Cepat",
			th: "บินเร็วจี๋"
		},

		damage: 70,
		cost: ["Grass", "Fire"]
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card