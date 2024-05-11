import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "輕飄飄",
		th: "พูรูริล"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		'zh-tw': "據流傳至今的傳說所述，牠是由沉沒到海底的古代都市的居民變成的寶可夢。",
		th: "มีตำนานเล่าสืบต่อกันมาว่าชาวเมืองที่อาศัยอยู่ในเมืองโบราณที่จมอยู่ก้นมหาสมุทรกลายมาเป็นโปเกมอน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "自我再生",
			th: "ฟื้นพลัง"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。將這隻寶可夢的HP全部恢復。",
			th: "ทิ้งพลังงานที่ติดกับโปเกมอนนี้ 1 ลูกที่ตำแหน่งทิ้งการ์ด รักษา HP ทั้งหมด ของโปเกมอนนี้"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "潑水",
			th: "สาดน้ำ"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card