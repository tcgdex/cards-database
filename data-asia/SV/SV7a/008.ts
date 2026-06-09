import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆香猿",
		'zh-cn': "爆香猿",
		ja: "バオッキー"
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "燃燒體內的火焰， 從頭部與尾巴撒出火花， 燒焦敵人。",
		'zh-cn': "燃燒體內的火焰， 從頭部與尾巴撒出火花， 燒焦敵人。",
		ja: "体の 中の 炎を 燃やして 頭や 尻尾から 火の粉を まき散らせて 敵を 焦がす。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "雙重粉碎",
			'zh-cn': "雙重粉碎",
			ja: "ダブルスマッシュ"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×70點傷害。",
			'zh-cn': "擲2次硬幣，造成正面出現的次數×70點傷害。",
			ja: "コインを2回投げ、オモテの数×70ダメージ。"
		},

		damage: "70×",
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [514],

	thirdParty: {
		cardmarket: 787568
	}
}

export default card