import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "地幔岩",
		th: "กันเทิล"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "透過聲音來探測四周。要是惹牠生氣了，牠會連身體方向也不轉就朝你追來。",
		th: "หยั่งรู้สภาพการณ์รอบข้างด้วยเสียง ถ้าทำให้มันโกรธ มันจะไล่กวดโดยไม่หันเปลี่ยนด้าน"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "守住",
			th: "ป้องกันตัว"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว ในเทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์จากท่าต่อสู้"
		},

		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "岩石粉碎",
			th: "ร็อคสแมช"
		},

		damage: 60,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card