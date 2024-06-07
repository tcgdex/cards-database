import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "青綿鳥",
		th: "ทิลท์โท",
		ja: "チルット"
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		'zh-tw': "從不疏於打理絲綿般的翅膀。一弄髒就會到水裡洗乾淨。",
		th: "คอยดูแลปีกที่เหมือนกับใยไหมอยู่ตลอดไม่เคยขาด พอสกปรกก็จะไปอาบน้ำล้างตัวจนสะอาด",
		ja: "真綿の ような 翼の 手入れは 絶対に 欠かさない。汚れると 水浴びをして きれいに 洗う。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "偷襲",
			th: "จู่โจมกะทันหัน",
			ja: "ふいをつく"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว",
			ja: "コインを1回投げウラなら、このワザは失敗。"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "E",
	dexId: [333]
}

export default card