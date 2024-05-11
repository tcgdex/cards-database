import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "派拉斯特",
		th: "พาราเซ็คท์"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "本體是背上的蘑菇，底下的蟲子幾乎已經死亡。 一旦蘑菇脫落，牠就再也不會動了。",
		th: "ส่วนที่เป็นแมลงเกือบจะตายแล้ว ส่วนตัวจริงของมันคือเห็ดที่อยู่บนหลัง ถ้าเด็ดออกจะเคลื่อนไหวไม่ได้อีก"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "力竭孢子",
			th: "สปอร์หมดกำลัง"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。將雙方的戰鬥寶可夢【中毒】與【睡眠】。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง ทำให้โปเกมอนบนตำแหน่งต่อสู้ของทั้งสองฝ่ายแต่ละตัวเป็นสภาวะ[พิษ]และ[หลับ]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "十字剪",
			th: "ซิสเซอร์ครอส"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加50點傷害。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 50"
		},

		damage: "50+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card