import { Card } from "models/database/card"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ユキメノコex",
		'zh-tw': "雪妖女ex",
		'th-th': "ยูกิเมโนโกะex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "きょうかすいげつ",
			'zh-tw': "鏡花水月",
			'th-th': "กระจก บุปผา วารี จันทรา"
		},

		effect: {
			'ja-jp': "このポケモンが、バトル場できぜつしたとき、自分はコインを1回投げる。オモテなら、とられるサイドは1枚少なくなる。",
			'zh-tw': "這隻寶可夢在戰鬥場【昏厥】時，自己擲1次硬幣。若為正面，則被獲得的獎賞卡減少1張。",
			'th-th': "เมื่อโปเกมอนนี้ อยู่บนตำแหน่งต่อสู้และ[หมดสภาพ]แล้ว ฝ่ายเราทอยเหรียญ 1 ครั้ง ถ้าออกหัว การ์ดรางวัลที่หยิบได้จะลดลง 1 ใบ"
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'ja-jp': "フロストバレット",
			'zh-tw': "冰霜子彈",
			'th-th': "ฟรอสต์บูลเล็ต"
		},

		damage: 140,

		effect: {
			'ja-jp': "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢也受到20點傷害。[在備戰區不計算弱點・抵抗力。]",
			'th-th': "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 20 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 734314,
				tcgplayer: 566933,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card