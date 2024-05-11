import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 哭哭面具",
		th: "กาลาร์ เดซึมาซึ"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'zh-tw': "據說牠是古代黏土板被帶有強烈怨念的靈魂吸引後誕生的寶可夢。",
		th: "ว่ากันว่าเป็นโปเกมอนที่เกิดมาตอนที่กระดานดินเหนียวสมัยโบราณถูกดึงดูดให้เข้าใกล้จิตวิญญาณของความเคียดแค้นอย่างแรงกล้า"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "狂舞揮打",
			th: "เหวี่ยงกระเด็น"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 30"
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card