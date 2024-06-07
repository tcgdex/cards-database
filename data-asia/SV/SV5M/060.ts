import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "老翁龍",
		th: "จิจีลอน"
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "住在海拔超過３０００公尺的山上。偶爾也會來到城鎮， 與住在那裡的孩子們一起玩耍。",
		th: "อาศัยอยู่บนเขาที่มีความสูงเกิน 3000 เมตร นาน ๆ ทีจะเข้ามาในเมืองและเล่นกับเด็ก ๆ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "重摑",
			th: "ตบแรง"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "盛怒炮",
			th: "ปืนใหญ่เดือดจัด"
		},

		effect: {
			'zh-tw': "若自己的所有備戰寶可夢身上都放置有傷害指示物，則增加120點傷害。",
			th: "ถ้าโปเกมอนบนเบนช์ฝ่ายเราทุกตัวมีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 120"
		},

		damage: "100+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card