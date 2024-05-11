import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵蟻",
		th: "ไอแอนท์"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "巨大的顎部能咬碎岩石。為了不讓沙螺蟒把蛋搶走，會和其他同類一起並肩戰鬥。",
		th: "กรามใหญ่นี้แม้จะเป็นหินก็กัดบดจนแหลกได้ ต่อสู้กันเป็นฝูงเพื่อปกป้องไข่จากซาไดจา"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "夾住",
			th: "หนีบ"
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "亂吃",
			th: "สวาปาม"
		},

		effect: {
			'zh-tw': "將對手的牌庫上方與自己的場上的「鐵蟻」數量相同數量的卡丟棄。",
			th: "ทิ้งการ์ดจากด้านบนสุดของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ดตามจำนวน [ไอแอนท์] บนกระดานฝ่ายเรา"
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card