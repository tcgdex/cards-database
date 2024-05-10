import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒトモシ",
		'zh-tw': "燭光靈"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Saya Tsuruta",
	dexId: [607],
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "明かりを 灯して 道案内を するように 見せかけながら 生命力を 吸い取っている。",
		'zh-tw': "點亮頭上的燭火， 假裝在指引道路。 但其實是在吸取對方的生命力。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "なかまをよぶ",
			'zh-tw': "呼朋引伴"
		},

		effect: {
			ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ひだね",
			'zh-tw': "火種"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card