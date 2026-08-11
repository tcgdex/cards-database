import { Card } from "models/database/card"
import Set from "../SVAM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨石丁",
		'th-th': "อิชิเฮนจิน",
		'id-id': "Stonjourner"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "在距離牠棲息地很遠的地方，有岩盤和牠 身體的岩石成分一致。",
		'th-th': "ส่วนประกอบของหินในร่างกายนั้นตรงกับพื้นหินของแผ่นดินที่อยู่ห่างไกลจากถิ่นที่อยู่",
		'id-id': "Komponen batu dari tubuh Stonjourner cocok dengan batuan dasar yang berada di daerah jauh dari habitatnya."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "堅硬身軀",
			'th-th': "ร่างแข็งแกร่ง",
			'id-id': "Tubuh Keras"
		},

		effect: {
			'zh-tw': "這隻寶可夢受到招式的傷害「-20」點。",
			'th-th': "แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-20]",
			'id-id': "Kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 20."
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "百萬噸重踢",
			'th-th': "เมกะตันคิก",
			'id-id': "Tendangan Megaton"
		},

		damage: 100,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card