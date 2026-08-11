import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "シガロコ",
		'zh-tw': "蟲滾泥",
		'th-th': "ชิกาโรโค",
		'id-id': "Rellor"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [953],
	hp: 40,
	types: ["Grass"],

	description: {
		'ja-jp': "エスパーエネルギーを 混ぜこみながら 土と 砂で 泥玉を 作る。 泥玉は 命より 大切。",
		'zh-tw': "會將超能力混進泥土和沙子裡製作出泥球。 泥球比自己的命還重要。",
		'th-th': "สร้างก้อนโคลนจากดินและทรายผสมพลังงานพลังจิต ให้ความสำคัญกับก้อนโคลนยิ่งกว่าชีวิต",
		'id-id': "Rellor membuat bola lumpur dengan tanah dan pasir sambil mencampurkan energi psikokinesisnya. Bola lumpur tersebut lebih penting daripada nyawanya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "むしくい",
			'zh-tw': "蟲咬",
			'th-th': "แมลงกัด",
			'id-id': "Gigitan Serangga"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705246,
				tcgplayer: 567770,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card