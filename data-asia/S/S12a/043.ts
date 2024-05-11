import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毒電嬰",
		th: "เอเลซัน"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "透過讓自身的毒素產生化學反應來發電。電力 雖然弱，卻能造成麻痺。",
		th: "เอาสารพิษมาเปลี่ยนแปลงทางเคมีเพื่อผลิตไฟฟ้า พลังงานไฟฟ้านั้นอ่อนแต่ก็ทำให้รู้สึกชาได้"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "叫聲",
			th: "คำราม"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-30」點。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนที่ได้รับท่าต่อสู้นี้ใช้ จะถูก [-30]"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "小伏特",
			th: "โวลต์ต่ำ"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card