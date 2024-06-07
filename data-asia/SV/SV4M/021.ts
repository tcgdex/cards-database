import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "パオジアン",
		'zh-tw': "古劍豹",
		th: "เป้าเจี้ยน"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1002],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "大昔に 剣によって 露と消えた 者たちの 憎しみが 雪を まとい ポケモンになった。",
		'zh-tw': "遙遠過去喪命於劍下者的憎恨之情纏繞在雪上，變成了寶可夢。",
		th: "ความชิงชังของผู้ที่ลาโลกไปด้วยคมดาบเมื่อนานมาแล้วถูกห่อหุ้มด้วยหิมะ จนกลายเป็นโปเกมอน"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "スノーブリング",
			'zh-tw': "雪之到來",
			th: "เบิกหิมะ"
		},

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を2枚まで選び、自分のポケモン1匹につける。",
			'zh-tw': "從自己的棄牌區選擇最多2張「基本【水】能量」卡，附於自己的1隻寶可夢身上。",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[น้ำ]] ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา 1 ตัว"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "ラースブレード",
			'zh-tw': "氣忿利刃",
			th: "ดาบโกรธเกรี้ยว"
		},

		damage: 130,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card