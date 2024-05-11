import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "莫魯貝可",
		th: "โมรุเปโกะ"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "頰囊中的電能轉化成了惡屬性的能量。因為肚子 餓扁了，所以非常凶暴。",
		th: "กระแสไฟในถุงแก้มเปลี่ยนเป็นพลังงานความมืดได้ ถ้าท้องว่างมากเกินไปจะบ้าคลั่งเป็นอย่างมาก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "貝可轟炸",
			th: "เปโกะบอมเบอร์"
		},

		effect: {
			'zh-tw': "這個招式必須在上個自己的回合「咚咚鼠」使用了「咚咚短路」才可使用。對手的所有寶可夢各受到60點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ท่าต่อสู้นี้ ในเทิร์นก่อนของฝ่ายเรา ถ้า [เดเด็นเนะ] ไม่ได้ใช้ [เดเดช็อต] จะใช้ไม่ได้ โปเกมอนฝ่ายตรงข้ามทุกตัว จะได้รับแดเมจตัวละ 60 {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		},

		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card