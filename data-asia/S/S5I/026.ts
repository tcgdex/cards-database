import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超能妙喵",
		th: "เนียโอนิกซ์"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "雄性的防衛本能很強，在保護自己和夥伴時能發揮最大的威力。",
		th: "ตัวผู้มีสัญชาตญาณในการป้องกันตัวสูง จะปล่อยพลังออกมาเต็มพิกัด เวลาที่จะปกป้องตัวเองหรือคู่ของมัน"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "耳部游移",
			th: "เอียมูฟ"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。選擇1個放置於自己的場上寶可夢身上的傷害指示物，改放於對手的場上寶可夢身上。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ย้ายตัวนับแดเมจ 1 ตัวที่วางบนโปเกมอนบนกระดานฝ่ายเราไปที่โปเกมอนบนกระดานฝ่ายตรงข้าม"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "念動彈",
			th: "บอลโทรจิต"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card