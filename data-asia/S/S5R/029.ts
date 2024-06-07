import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "磨牙彩皮魚",
		th: "ฮากิกิชิริ"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "厚實的皮膚連好壞星的針也無法穿透。會用結實的牙齒把針咬碎之後吃下去。",
		th: "มีหนังหนาขนาดที่หนามของฮิโดอิเดะก็แทงไม่เข้า จะกัดหนามกินด้วยฟันที่แข็งแรง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬住",
			th: "กัดติด"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "衝浪",
			th: "โต้คลื่น"
		},

		damage: 110,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card