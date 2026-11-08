import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヒコザル",
		'zh-tw': "小火焰猴",
		'th-th': "ฮิโกซารุ"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [390],
	hp: 60,
	types: ["Fire"],

	description: {
		'ja-jp': "お尻の 炎は お腹で 作られた ガスが 燃料。 雨に ぬれても 消えない。",
		'zh-tw': "屁股上的火焰是以 肚子裡產生的瓦斯為燃料。 即使被雨淋到也不會熄滅。",
		'th-th': "เปลวไฟที่ก้นได้เชื้อไฟจากแก๊สที่ผลิตในท้อง แม้เปียกฝน ไฟก็ไม่ดับ"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'ja-jp': "ひをふく",
			'zh-tw': "吹火",
			'th-th': "เป่าไฟ"
		},

		damage: "20+",

		effect: {
			'ja-jp': "コインを1回投げオモテなら、20ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 761475,
				tcgplayer: 566070,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
}

export default card