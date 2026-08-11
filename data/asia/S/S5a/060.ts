import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "長毛狗",
		th: "มูแลนด์"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	description: {
		'zh-tw': "有著又長又厚的體毛。過去在寒冷的地方，每戶人家都會養１隻長毛狗。",
		th: "มีขนที่ยาวหนา ในอดีตพื้นที่หนาวเย็นจะเลี้ยงมูแลนด์ไว้บ้านละ 1 ตัว"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "威嚇之牙",
			th: "เขี้ยวข่มขวัญ"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手的戰鬥寶可夢使用招式的傷害，全部「-30」點。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่บนตำแหน่งต่อสู้ แดเมจของท่าต่อสู้ที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามใช้ ทั้งหมดจะถูก [-30]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "擊飛",
			th: "ตบกระเด็น"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加100點傷害。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 100"
		},

		damage: "120+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card