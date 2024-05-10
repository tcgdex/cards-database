import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "シガロコ",
		'zh-tw': "蟲滾泥",
		th: "ชิกาโรโค",
		id: "Rellor"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [953],
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "エスパーエネルギーを 混ぜこみながら 土と 砂で 泥玉を 作る。 泥玉は 命より 大切。",
		'zh-tw': "會將超能力混進泥土和沙子裡製作出泥球。 泥球比自己的命還重要。",
		th: "สร้างก้อนโคลนจากดินและทรายผสมพลังงานพลังจิต ให้ความสำคัญกับก้อนโคลนยิ่งกว่าชีวิต",
		id: "Rellor membuat bola lumpur dengan tanah dan pasir sambil mencampurkan energi psikokinesisnya. Bola lumpur tersebut lebih penting daripada nyawanya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "むしくい",
			'zh-tw': "蟲咬",
			th: "แมลงกัด",
			id: "Gigitan Serangga"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card