import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雙劍鞘",
		th: "นิดังกิล"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		'zh-tw': "２把劍會用令人眼花繚亂的速度不斷交替攻擊和防禦，藉以制服獵物。",
		th: "ดาบทั้งสองเล่มปราบเหยื่อลงได้ด้วยกลยุทธ์ในการต่อสู้แบบเปลี่ยนกันรุกและรับอย่างรวดเร็ว"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "切落",
			th: "ฟันขาด"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว ทิ้งพลังงานที่ติดกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูกที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 40,
		cost: ["Metal", "Colorless"]
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
	regulationMark: "E"
}

export default card