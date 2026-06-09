import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ストリンダーex",
		th: "สตรินเดอร์ex",
		ko: "스트린더 ex"
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
			th: "น็อกแฮมเมอร์",
			ko: "테라스탈"
		},

		damage: 70,

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。",
			th: "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
			ko: "이 포켓몬은 벤치에 있는 한, 기술의 데미지를 받지 않는다."
		}
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			ja: "ガイアパンク",
			th: "ไกอาพังก์",
			ko: "노크해머"
		},

		damage: 270,

		effect: {
			ja: "自分の場のポケモンについているエネルギーを3個選び、トラッシュする。",
			th: "เลือกพลังงาน[สายฟ้า]ที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเรา 3 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			ko: "상대의 덱을 위에서부터 1장 트래쉬한다."
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