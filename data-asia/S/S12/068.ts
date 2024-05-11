import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "勾帕路翁",
		th: "โคบัลออน"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'zh-tw': "傳說牠曾經與代拉基翁和畢力吉翁一起，為了保護 合眾地區的寶可夢而與人類作戰。",
		th: "มีตำนานเล่าขานว่า เคยร่วมมือกับเทราคิออนและวิริซิออนในการต่อสู้กับมนุษย์เพื่อปกป้องเหล่าโปเกมอนในภูมิภาคอิชชู"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "正義之律",
			th: "กฎแห่งความเที่ยงธรรม"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的【基礎】寶可夢使用的招式，對對手的戰鬥場的【惡】寶可夢造成的傷害「+30」點。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ แดเมจของท่าต่อสู้ที่โปเกมอน[พื้นฐาน]ฝ่ายเราใช้ทำกับโปเกมอน[ความมืด]บนตำแหน่งต่อสู้ฝ่ายตรงข้าม จะถูก [+30]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "跟進",
			th: "ฟอลโลว์อัป"
		},

		effect: {
			'zh-tw': "選擇最多2隻自己的備戰寶可夢，從牌庫附給那些寶可夢各1張基本能量卡。並且重洗牌庫。",
			th: "เลือกโปเกมอนบนเบนช์ฝ่ายเราได้สูงสุด 2 ตัว นำการ์ดพลังงานพื้นฐานจากสำรับการ์ดมาติดตัวละ 1 ใบ แล้วสับสำรับการ์ด"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card