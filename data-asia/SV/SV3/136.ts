import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ピジョットex",
		'zh-tw': "大比鳥ex",
		th: "พีเจียตex"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "マッハサーチ",
			'zh-tw': "音速搜索",
			th: "มัคเซิร์ช"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。この番、すでに別の「マッハサーチ」を使っていたなら、この特性は使えない。",
			'zh-tw': "在自己的回合時可使用1次。從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。在這個回合，若已經使出了其他的「音速搜索」，則這個特性無法使用。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดที่ชอบ 1 ใบจากสำรับการ์ดฝ่ายเรา นำขึ้นมือ แล้วสับสำรับการ์ด เทิร์นนี้ ถ้าใช้ [มัคเซิร์ช] ใบอื่นไปแล้ว จะใช้ความสามารถนี้ไม่ได้"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ふきすさぶ",
			'zh-tw': "狂風呼嘯",
			th: "พัดกระหน่ำ"
		},

		damage: 120,

		effect: {
			ja: "のぞむなら、場に出ているスタジアムをトラッシュする。",
			'zh-tw': "若希望，將場上的競技場卡丟棄。",
			th: "หากต้องการ ทิ้งการ์ดสเตเดียมที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card