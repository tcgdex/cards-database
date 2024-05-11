import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大牙狸",
		th: "บิปปา"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "總是啃大樹和石頭來打磨堅硬的門牙。 在水邊築巢生活。",
		th: "จะคอยแทะไม้หรือหินอยู่เสมอเพื่อลับฟันหน้าที่แข็งแรง สร้างรังอาศัยอยู่ริมน้ำ"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "一臉不在乎",
			th: "ทำหน้าเฉย"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在備戰區，不會受到招式的傷害。",
			th: "โปเกมอนนี้ ตราบใดที่ยังอยู่บนเบนช์ จะไม่ได้รับแดเมจจากท่าต่อสู้"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "必殺門牙",
			th: "ฟันหน้ามรณะ"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card