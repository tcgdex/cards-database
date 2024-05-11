import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龍王蠍V",
		th: "โดราเปียนV"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "狂野風格",
			th: "ไวลด์สไตล์"
		},

		effect: {
			'zh-tw': "這隻寶可夢使用招式所需的【無】能量，減少對手的場上「一擊」「連擊」「匯流」寶可夢的數量。",
			th: "พลังงาน[ไร้สี]ที่จำเป็นสำหรับใช้ท่าต่อสู้ของโปเกมอนนี้จะลดลง ตามจำนวนโปเกมอน [จู่โจมครั้งเดียว] [จู่โจมต่อเนื่อง] [จู่โจมแบบฟิวชัน] บนกระดานฝ่ายตรงข้าม"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "極限之尾",
			th: "ไดนามิกเทล"
		},

		effect: {
			'zh-tw': "自己的1隻寶可夢也受到60點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนฝ่ายเรา 1 ตัว ก็จะได้รับแดเมจ 60 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		},

		damage: 190,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card