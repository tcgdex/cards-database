import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "キラーメ",
		'zh-tw': "晶光芽",
		th: "คิราเมะ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Miki Tanaka",
	dexId: [969],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "毒成分の 結晶が まるで 花びらに 見える。 花粉のように 毒の粉を ばらまき 身を守る。",
		'zh-tw': "以毒構成的結晶看似花瓣。 會如灑花粉般地灑出毒粉 來保護自身安全。",
		th: "ผลึกของสารพิษดูราวกับกลีบดอกไม้ โรยผงพิษเหมือนเกสรดอกไม้เพื่อป้องกันตัวเอง"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ロックショット",
			'zh-tw': "岩石射擊",
			th: "ร็อกช็อต"
		},

		damage: 30,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card