import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "コソクムシ",
		'zh-tw': "膽小蟲",
		th: "โคโซคูมูชิ"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	dexId: [767],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "群れで かたまり つねに まわりを 警戒している。 敵の 気配を 感じると 散り散りに 逃げ出す。",
		'zh-tw': "成群聚集，隨時保持警惕。只要察覺到有敵人， 就會分散開來四處逃竄。",
		th: "รวมกันเป็นฝูงคอยระแวดระวังรอบข้างอยู่ตลอด ถ้ารู้สึกถึงวี่แววของศัตรูก็จะหนีกระจัดกระจายกันไป"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "こっそりたべる",
			'zh-tw': "暗中偷吃",
			th: "แอบกิน"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手の手札からオモテを見ないで1枚選び、トラッシュする。",
			'zh-tw': "擲1次硬幣若為正面，則在不看正面的情況下，從對手的手牌選擇1張，將其丟棄。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกการ์ด 1 ใบจากบนมือฝ่ายตรงข้ามโดยไม่ดูหน้าการ์ด ทิ้งที่ตำแหน่งทิ้งการ์ด"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ぶつかる",
			'zh-tw': "衝撞",
			th: "กระแทก"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741322
	}
}

export default card