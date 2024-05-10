import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ストリンダーex",
		'zh-tw': "顫弦蠑螈ex",
		th: "สตรินเดอร์ex"
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
			ja: "ノックハンマー",
			'zh-tw': "敲擊之錘",
			th: "น็อกแฮมเมอร์"
		},

		damage: 70,

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方1張卡丟棄。",
			th: "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด"
		}
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			ja: "ガイアパンク",
			'zh-tw': "蓋亞龐克",
			th: "ไกอาพังก์"
		},

		damage: 270,

		effect: {
			ja: "自分の場のポケモンについているエネルギーを3個選び、トラッシュする。",
			'zh-tw': "選擇3個自己的場上寶可夢身上附加的【雷】能量，將其丟棄。",
			th: "เลือกพลังงาน[สายฟ้า]ที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเรา 3 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card