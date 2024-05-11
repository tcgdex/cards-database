import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "念力土偶",
		th: "เนนดอลล์",
		ja: "ネンドール"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "似乎是由２萬年前的古代人製作的泥偶 蛻變而來的謎之寶可夢。",
		th: "โปเกมอนลึกลับที่ดูเหมือนว่าเกิดมาจากรูปปั้นโคลนที่มนุษย์โบราณสองหมื่นปีก่อนสร้างขึ้น",
		ja: "２万年前の 古代人が つくった 泥人形から 生まれたらしい 謎の ポケモン。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "神秘充能",
			th: "มิสเทรีชาร์จ",
			ja: "ミステリーチャージ"
		},

		effect: {
			'zh-tw': "若自己的棄牌區1張支援者卡都沒有，則在自己的回合時可使用1次。從自己的棄牌區選擇1張【鬥】能量卡，附於自己的寶可夢身上。",
			th: "ถ้าบนตำแหน่งทิ้งการ์ดฝ่ายเราไม่มีการ์ดซัพพอร์ตเลยแม้แต่ 1 ใบ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดพลังงาน[ต่อสู้] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา",
			ja: "自分のトラッシュにサポートが1枚もないなら、自分の番に1回使える。自分のトラッシュからエネルギーを1枚選び、自分のポケモンにつける。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "迴轉攻擊",
			th: "โจมตีหมุนวน",
			ja: "かいてんアタック"
		},

		damage: 70,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [344]
}

export default card