import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 霹靂電球",
		th: "ฮิซุย บิริริดามา"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "形狀頗似精靈球的奇異寶可夢。 當情緒高漲時，積蓄在腹部的 電流就會放出，同時發出大笑。",
		th: "เป็นโปเกมอนปริศนาที่บังเอิญดูคล้ายกับมอนสเตอร์บอล เมื่อตื่นเต้นมาก ๆ จะปลดปล่อยกระแสไฟฟ้าที่เก็บไว้ในท้องออกมาแล้วหัวเราะร่า"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "精心充能",
			th: "ชาร์จความเริงร่า"
		},

		effect: {
			'zh-tw': "這個招式只可在後攻玩家的最初回合使用。選擇最多2隻自己的備戰寶可夢，從牌庫附給那些寶可夢各1張基本能量卡。並且重洗牌庫。",
			th: "ท่าต่อสู้นี้ ใช้ได้ในเทิร์นแรกสุดของผู้เล่นฝ่ายเล่นทีหลังเท่านั้น เลือกโปเกมอนบนเบนช์ฝ่ายเราได้สูงสุด 2 ตัว นำการ์ดพลังงานพื้นฐานจากสำรับการ์ดมาติดตัวละ 1 ใบ แล้วสับสำรับการ์ด"
		}
	}, {
		name: {
			'zh-tw': "衝撞",
			th: "กระแทก"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card