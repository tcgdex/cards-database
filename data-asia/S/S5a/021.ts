import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電燈怪",
		th: "แลนเทอร์น"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "發出強光讓獵物暫時失明。趁獵物露出破綻時，用電擊招呼對手。",
		th: "ปล่อยแสงสว่างจ้าออกมาทำให้ตาของเหยื่อพร่ามัว แล้วใช้โอกาสช่วงนั้นปล่อยไฟฟ้าเข้าโจมตี"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "障眼光束",
			th: "ลำแสงตาพร่า"
		},

		effect: {
			'zh-tw': "在下個對手的回合，當受到這個招式的寶可夢使用招式時，對手擲1次硬幣。若為反面，則那個招式失敗。",
			th: "ในเทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนที่ได้รับท่าต่อสู้นี้จะใช้ท่าต่อสู้ ฝ่ายตรงข้ามทอยเหรียญ 1 ครั้ง ถ้าออกก้อย ท่าต่อสู้นั้นล้มเหลว"
		},

		damage: 40,
		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			'zh-tw': "電球",
			th: "อิเล็กทริกบอล"
		},

		damage: 120,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card