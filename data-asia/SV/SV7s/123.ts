import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เนียส",
		id: "Meowth"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		th: "ชอบของที่ส่องแสงเป็นประกายมาก พอเจอของเปล่งประกายแล้วไม่รู้ทำไมเหรียญบนหน้าผากถึงส่องแสงแวววาว",
		id: "Meowth sangat menyukai benda-benda berkilau. Entah kenapa koin di keningnya ikut bercahaya ketika ia menemukan benda berkilau."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ข่วนแหลก",
			id: "Cakaran Kacau"
		},

		effect: {
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x20",
			id: "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card