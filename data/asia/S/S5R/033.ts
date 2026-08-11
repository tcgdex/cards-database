import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "帕奇利茲",
		th: "พาจิริซึ"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'zh-tw': "有時候可以見到為了將儲存的電力分給同伴而互相摩擦頰囊的帕奇利茲。",
		th: "บางทีก็พบเห็นพาจิริซึ ใช้ถุงแก้มเสียดสีกันเพื่อแบ่งไฟฟ้าที่เก็บสะสมไว้"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "尋找朋友",
			th: "หาพรรคพวก"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอน 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "咬",
			th: "แทะ"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card