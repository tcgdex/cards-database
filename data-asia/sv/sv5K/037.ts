import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ドロバンコ",
		'zh-tw': "泥驢仔",
		th: "โดโรบังโค",
		'zh-cn': "泥驢仔"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	dexId: [749],
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "まとっている 泥は 食べた 土を 反芻したもの。 長時間 日差しを 浴びても 乾かないのだ。",
		'zh-tw': "裹在身上的泥巴是吃下的土反芻而成的。就算長時間 曝曬在陽光下也不會乾掉。",
		th: "โคลนที่ติดอยู่คือดินที่เคี้ยวซ้ำแล้วซ้ำเล่า ไม่ว่าจะตากแดดนานขนาดไหนก็ไม่แห้ง",
		'zh-cn': "裹在身上的泥巴是吃下的土反芻而成的。就算長時間 曝曬在陽光下也不會乾掉。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "けとばす",
			'zh-tw': "踢飛",
			th: "ดีด",
			'zh-cn': "踢飛"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "どろかけ",
			'zh-tw': "擲泥",
			th: "สาดโคลน",
			'zh-cn': "擲泥"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card