import { Card } from "models/database/card"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ジラーチ",
		'zh-tw': "基拉祈",
		'th-th': "จิราชิ"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	dexId: [385],
	hp: 70,
	types: ["Metal"],

	description: {
		'ja-jp': "１０００年間で ７日だけ 目を 覚まし どんな 願い事でも かなえる 力を 使うという。",
		'zh-tw': "據說牠在１０００年之中 只有７天時間會醒過來， 使用能實現任何願望的力量。",
		'th-th': "กล่าวกันว่าใน 1000 ปี มันจะลืมตาตื่นขึ้นมาเพียงแค่ 7 วัน และใช้พลังทำให้คำอธิษฐานใด ๆ เป็นจริงได้"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ステラヴェール",
			'zh-tw': "恆星之幕",
			'th-th': "ม่านดาวจรัสแสง"
		},

		effect: {
			'ja-jp': "このポケモンがいるかぎり、自分のベンチポケモン全員は、相手のたねポケモンが使うワザの効果で、ダメカンがのらない。",
			'zh-tw': "只要這隻寶可夢在場上，自己的所有備戰寶可夢，不會因對手的【基礎】寶可夢使用招式的效果而被放置傷害指示物。",
			'th-th': "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนบนเบนช์ฝ่ายเราทุกตัว จะไม่ถูกวางตัวนับแดเมจ ด้วยเอฟเฟกต์ของท่าต่อสู้ที่โปเกมอน[พื้นฐาน]ฝ่ายตรงข้ามใช้"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "エネチャージ",
			'zh-tw': "蓄能量",
			'th-th': "เอนเนอร์จี้ชาร์จ"
		},

		effect: {
			'ja-jp': "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
			'th-th': "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 734281,
				tcgplayer: 566900,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card