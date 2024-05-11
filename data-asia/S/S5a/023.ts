import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷鳥龍V",
		th: "พัจจิรากอนV"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 220,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "遠古鳥嘴",
			th: "จะงอยปากดึกดำบรรพ์"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢，無法從手牌使出並附上能量。",
			th: "ในเทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ ไม่สามารถนำการ์ดพลังงานจากบนมือมาติดได้"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "山岳橫掃",
			th: "เมาท์เทนสวิง"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方3張卡丟棄。",
			th: "ทิ้งการ์ด 3 ใบจากด้านบนของสำรับการ์ดฝ่ายเราที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 180,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card