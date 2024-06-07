import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "葉伊布V",
		th: "ลีเฟียV",
		ja: "リーフィアV"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "綠化細胞",
			th: "เซลล์สร้างใบไม้",
			ja: "りょくかさいぼう"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次，若使用，則自己的回合結束。從自己的牌庫選擇1張【草】能量卡，附於自己的寶可夢身上。並且重洗牌庫。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เมื่อใช้แล้วจะจบเทิร์นฝ่ายเรา เลือกการ์ดพลังงาน [หญ้า] 1 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา แล้วสับสำรับการ์ด",
			ja: "自分の番に1回使えて、使ったなら、自分の番は終わる。自分の山札からエネルギーを1枚選び、自分のポケモンにつける。そして山札を切る。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "葉刃",
			th: "ลีฟเบลด",
			ja: "リーフブレード"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加60點傷害。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 60",
			ja: "コインを1回投げオモテなら、60ダメージ追加。"
		},

		damage: "90＋",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	rarity: "Double rare"
}

export default card