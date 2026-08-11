import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "修建老匠",
		th: "โรบูชิน"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	description: {
		'zh-tw': "要是認真起來就會扔掉手中的混凝土柱，赤手空拳地撲向敵人。",
		th: "ถึงเวลาเอาจริง จะทิ้งเสาคอนกรีตและกระโจนเข้าไปต่อยคู่ต่อสู้ด้วยกำปั้น"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "鐵鎚壓迫",
			th: "แฮมเมอร์เพรสเชอร์"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的進化寶可夢無法使用招式。",
			th: "ในเทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนวิวัฒนาการที่ได้รับท่าต่อสู้นี้จะใช้ท่าต่อสู้ไม่ได้"
		},

		damage: 90,
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "百萬噸重拳",
			th: "เมกะตันพันช์"
		},

		damage: 150,
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card