import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ダルマッカ",
		'zh-tw': "火紅不倒翁",
		th: "ดารุมักกะ"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [554],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "寝ているときは 押しても 引いても けっして 倒れない。 縁起ものの モチーフとして 人気が 高い。",
		'zh-tw': "在牠睡覺的時候，無論是推是拉，牠都不會倒下。因為象徵著吉利而大受歡迎。",
		th: "ในขณะที่หลับอยู่ไม่ว่าจะดึงหรือผลักยังไงก็ไม่ล้ม เป็นลวดลายของเครื่องรางนำโชคได้รับความนิยมสูง"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ずつき",
			'zh-tw': "頭錘",
			th: "พุ่งหัวชน"
		},

		damage: 20
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "ふいをつく",
			'zh-tw': "偷襲",
			th: "จู่โจมกะทันหัน"
		},

		damage: 70,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card