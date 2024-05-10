import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "コオリッポex",
		'zh-tw': "冰砌鵝ex",
		th: "โคโอริปโปะex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			ja: "アツアツブロック",
			'zh-tw': "熱熱冰塊",
			th: "บล็อกร้อน ๆ"
		},

		damage: 160,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。次の相手の番、このワザを受けたポケモンは、ワザが使えない。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。在下個對手的回合，受到這個招式的寶可夢無法使用招式。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะใช้ท่าต่อสู้ไม่ได้"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card