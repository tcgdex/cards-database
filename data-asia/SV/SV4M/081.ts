import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ストリンダーex",
		th: "สตรินเดอร์ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			ja: "ノックハンマー",
			th: "น็อกแฮมเมอร์"
		},

		damage: 70,

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。",
			th: "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด"
		}
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			ja: "ガイアパンク",
			th: "ไกอาพังก์"
		},

		damage: 270,

		effect: {
			ja: "自分の場のポケモンについているエネルギーを3個選び、トラッシュする。",
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