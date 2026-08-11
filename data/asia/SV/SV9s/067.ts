import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ซานากิราส",
		'id-id': "Pupitar"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'th-th': "เป็นดักแด้ที่บินและอาละวาดไปมาโดยการพ่นแก๊สที่อัดแน่นอยู่ภายใน ร่างกายออกมาอย่างรุนแรง",
		'id-id': "Pupitar adalah pupa yang mengamuk dan terbang dengan menyemburkan gas yang terkompres di dalam tubuhnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "พุ่งเข้าใส่",
			'id-id': "Menerjang"
		},

		effect: {
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 20."
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card