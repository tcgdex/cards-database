import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パオジアン",
		'zh-tw': "古劍豹",
		'th-th': "เป้าเจี้ยน",
		'ko-kr': "파오젠"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1002],
	hp: 120,
	types: ["Water"],

	description: {
		'ja-jp': "大昔に 剣によって 露と消えた 者たちの 憎しみが 雪を まとい ポケモンになった。",
		'zh-tw': "遙遠過去喪命於劍下者的憎恨之情纏繞在雪上，變成了寶可夢。",
		'th-th': "ความชิงชังของผู้ที่ลาโลกไปด้วยคมดาบเมื่อนานมาแล้วถูกห่อหุ้มด้วยหิมะ จนกลายเป็นโปเกมอน",
		'ko-kr': "먼 옛날, 검에 의해 이슬이 되어 사라진 자들의 증오가 눈을 두르고 포켓몬이 되었다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'ja-jp': "スノーブリング",
			'zh-tw': "雪之到來",
			'th-th': "เบิกหิมะ",
			'ko-kr': "스노브링"
		},

		effect: {
			'ja-jp': "自分のトラッシュから「基本エネルギー」を2枚まで選び、自分のポケモン1匹につける。",
			'zh-tw': "從自己的棄牌區選擇最多2張「基本【水】能量」卡，附於自己的1隻寶可夢身上。",
			'th-th': "เลือกการ์ด [พลังงานพื้นฐาน[น้ำ]] ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา 1 ตัว",
			'ko-kr': "자신의 트래쉬에서 「기본 (물) 에너지」를 2장까지 선택해서 자신의 포켓몬 1마리에게 붙인다."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'ja-jp': "ラースブレード",
			'zh-tw': "氣忿利刃",
			'th-th': "ดาบโกรธเกรี้ยว",
			'ko-kr': "래스블레이드"
		},

		damage: 130,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを2個選び、トラッシュする。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'ko-kr': "이 포켓몬에게 붙어 있는 에너지를 2개 선택해서 트래쉬한다."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 741848,
				tcgplayer: 565981,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card