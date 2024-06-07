import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "眷戀雲V",
		th: "เลิฟโทลอสV",
		ja: "ラブトロスV"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "愛之守護神",
			th: "เทพพิทักษ์แห่งความรัก",
			ja: "あいのしゅごしん"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有身上附有【超】能量的寶可夢（「眷戀雲V」 除外），不會受到對手的寶可夢的特性效果影響。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนฝ่ายเราที่มีพลังงาน[พลังจิต]ติดอยู่ทุกตัว (ยกเว้น เลิฟโทลอส【V】) จะไม่ได้รับเอฟเฟกต์จากความสามารถของโปเกมอนฝ่ายตรงข้าม",
			ja: "このポケモンがいるかぎり、エネルギーがついている自分のポケモン（「ラブトロスV」をのぞく）全員は、相手のポケモンから特性の効果を受けない。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "花開之尾",
			th: "บลอสซัมเทล",
			ja: "ブロッサムテール"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張基本能量卡，以任意方式附於備戰寶可夢身上。",
			th: "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนบนเบนช์ตามชอบ",
			ja: "自分のトラッシュから基本エネルギーを2枚まで選び、ベンチポケモンに好きなようにつける。"
		},

		damage: 100,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card