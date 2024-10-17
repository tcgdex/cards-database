import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毛辮羊",
		'zh-cn': "毛辮羊",
		ja: "ウールー"
	},

	illustrator: "Wintr Wandr",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "捲捲的體毛彈性十足。 就算從懸崖上掉下去， 也不會受傷。",
		'zh-cn': "捲捲的體毛彈性十足。 就算從懸崖上掉下去， 也不會受傷。",
		ja: "パーマの かかった 体毛は 高い クッション性が ある。 崖から 落ちても へっちゃら。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "搗碎",
			'zh-cn': "搗碎",
			ja: "つきくずす"
		},

		effect: {
			'zh-tw': "若希望，將場上的競技場卡丟棄。",
			'zh-cn': "若希望，將場上的競技場卡丟棄。",
			ja: "のぞむなら、場に出ているスタジアムをトラッシュする。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [831]
}

export default card