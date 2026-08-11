import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "貓鼬斬",
		th: "แซงกูส"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'zh-tw': "只要聞到飯匙蛇的氣味，全身的體毛就會倒豎。會用鋒利的爪子撕裂敵人。",
		th: "แค่ได้กลิ่นของฮาบูเนค ขนทั่วร่างก็จะตั้งชันขึ้น มีเล็บอันแหลมคมไว้เชือดเฉือนศัตรู"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "疾風爪",
			th: "กรงเล็บลมกรด"
		},

		effect: {
			'zh-tw': "在這個回合，若從手牌使出了「連擊」支援者，則對手的2隻備戰寶可夢也各受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ในเทิร์นนี้ ถ้านำการ์ดซัพพอร์ต จากบนมือออกมาใช้แล้ว โปเกมอนบนเบนช์ฝ่ายตรงข้าม 2 ตัว ก็จะได้รับแดเมจตัวละ 50 ด้วย [โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด]"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card