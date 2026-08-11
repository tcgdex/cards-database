import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ストリンダーex",
		'zh-tw': "顫弦蠑螈ex",
		'th-th': "สตรินเดอร์ex",
		'ko-kr': "스트린더 ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			'ja-jp': "ノックハンマー",
			'zh-tw': "敲擊之錘",
			'th-th': "น็อกแฮมเมอร์",
			'ko-kr': "테라스탈"
		},

		damage: 70,

		effect: {
			'ja-jp': "相手の山札を上から1枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方1張卡丟棄。",
			'th-th': "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
			'ko-kr': "이 포켓몬은 벤치에 있는 한, 기술의 데미지를 받지 않는다."
		}
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			'ja-jp': "ガイアパンク",
			'zh-tw': "蓋亞龐克",
			'th-th': "ไกอาพังก์",
			'ko-kr': "노크해머"
		},

		damage: 270,

		effect: {
			'ja-jp': "自分の場のポケモンについているエネルギーを3個選び、トラッシュする。",
			'zh-tw': "選擇3個自己的場上寶可夢身上附加的【雷】能量，將其丟棄。",
			'th-th': "เลือกพลังงาน[สายฟ้า]ที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเรา 3 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'ko-kr': "상대의 덱을 위에서부터 1장 트래쉬한다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 741867,
				tcgplayer: 566000,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card