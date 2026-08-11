import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "คาจิชชู",
		'id-id': "Applin"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		'th-th': "เติบโตด้วยการกินเนื้อแอปเปิล ใช้ของเหลวในร่างกายทำให้เปลือก แข็งมากขึ้นและกันไม่ให้เน่าเสีย",
		'id-id': "Applin tumbuh dengan memakan daging buah apel. Pokémon ini menggunakan cairan tubuhnya untuk meningkatkan kekuatan kulitnya, serta menjaganya agar tidak membusuk."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "สมอลเดรน",
			'id-id': "Serapan Mini"
		},

		effect: {
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [10]",
			'id-id': "Pulihkan HP Pokémon ini sejumlah 10."
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card