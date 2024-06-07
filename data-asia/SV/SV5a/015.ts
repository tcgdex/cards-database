import { Card } from "../../../interfaces"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒコザル",
		'zh-tw': "小火焰猴",
		th: "ฮิโกซารุ"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [390],
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "お尻の 炎は お腹で 作られた ガスが 燃料。 雨に ぬれても 消えない。",
		'zh-tw': "屁股上的火焰是以 肚子裡產生的瓦斯為燃料。 即使被雨淋到也不會熄滅。",
		th: "เปลวไฟที่ก้นได้เชื้อไฟจากแก๊สที่ผลิตในท้อง แม้เปียกฝน ไฟก็ไม่ดับ"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ひをふく",
			'zh-tw': "吹火",
			th: "เป่าไฟ"
		},

		damage: "20+",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card