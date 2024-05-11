import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 卡蒂狗",
		th: "ฮิซุย การ์ดี"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "兩隻一組共同負責地盤的警戒工作。 體毛中混有火成岩的成分，可以 推想這是受到火山活動的影響。",
		th: "จับคู่กันเพื่อเฝ้าตรวจตราอาณาเขตของตน สันนิษฐานกันว่าส่วนประกอบของหินอัคนีที่ปะปนอยู่ในขนตามตัวนั้น น่าจะเกิดจากอิทธิพลของภูเขาไฟระเบิด"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "灼熱",
			th: "เผา"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card