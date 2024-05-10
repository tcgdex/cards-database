import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ポチエナ",
		'zh-tw': "土狼犬",
		th: "โปชิเอนา"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [261],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "しつこい 性格の ポケモン。 目をつけた 獲物が ヘトヘトに 疲れるまで 追いかけ回す。",
		'zh-tw': "個性執著的寶可夢。一旦盯上某個獵物， 就會不停追逐直到對方精疲力盡。",
		th: "โปเกมอนที่มีนิสัยกัดไม่ปล่อย จะตามไล่ล่าเหยื่อที่หมายตาไปมาจนกว่าเหยื่อจะเหนื่อยจนหมดแรง"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "かじりつくす",
			'zh-tw': "咬盡",
			th: "แทะเกลี้ยง"
		},

		damage: "30+",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card