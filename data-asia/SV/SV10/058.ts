import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>尼多蘭",
		'zh-cn': "<火箭隊的>尼多蘭",
		ja: "ロケット団のニドラン♀"
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "會用堅硬的門牙咬碎 樹果後吃下。角的尖端 會比雄性還要圓一些。",
		'zh-cn': "會用堅硬的門牙咬碎 樹果後吃下。角的尖端 會比雄性還要圓一些。",
		ja: "硬い 前歯で 木の実を 砕いて 食べる。 ツノの 先は オスより 少し 丸みを 帯びている。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "偷襲",
			'zh-cn': "偷襲",
			ja: "ふいをつく"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			'zh-cn': "擲1次硬幣若為反面，則這個招式失敗。",
			ja: "コインを1回投げウラなら、このワザは失敗。"
		},

		damage: 30,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [29]
}

export default card