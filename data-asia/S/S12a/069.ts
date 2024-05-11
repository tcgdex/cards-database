import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 卡蒂狗",
		th: "ฮิซุย การ์ดี",
		ja: "ヒスイ ガーディ"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "兩隻一組共同負責地盤的警戒工作。 體毛中混有火成岩的成分，可以 推想這是受到火山活動的影響。",
		th: "จับคู่กันเพื่อเฝ้าตรวจตราอาณาเขตของตน สันนิษฐานกันว่าส่วนประกอบของหินอัคนีที่ปะปนอยู่ในขนตามตัวนั้น น่าจะเกิดจากอิทธิพลของภูเขาไฟระเบิด",
		ja: "対になりて 縄張りを 哨戒す。 体毛に 火成岩なる 成分 混ざるは 火山活動の 影響と 推察す。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "灼熱",
			th: "เผา",
			ja: "こがす"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]",
			ja: "相手のバトルポケモンをやけどにする。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	dexId: [58]
}

export default card