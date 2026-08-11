import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โดกาซ",
		'id-id': "Koffing"
	},

	illustrator: "Rond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'th-th': "เพราะภายในร่างกายที่เหมือนลูกโป่งบาง ๆ นั้นมีแก๊สพิษร้ายแรงอัด แน่นอยู่ บางครั้งมันก็จะทำให้เกิดระเบิดรุนแรง",
		'id-id': "Karena tubuhnya yang berbentuk balon tipis dipenuhi dengan gas beracun mematikan, terkadang ia menimbulkan ledakan yang besar."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "พุ่งเข้าชน",
			'id-id': "Serudukan"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ห่อหุ้มด้วยแก๊ส",
			'id-id': "Gas yang Menyelimuti"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card