import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燈籠魚",
		'zh-cn': "燈籠魚",
		ja: "チョンチー"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'zh-tw': "會從２根觸手的前端 釋放正負電流來麻痺對手。",
		'zh-cn': "會從２根觸手的前端 釋放正負電流來麻痺對手。",
		ja: "２つの 触手の 先から プラスと マイナスの 電気を 流して 相手を しびれさせる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "雙重伏特",
			'zh-cn': "雙重伏特",
			ja: "ダブルボルト"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×20點傷害。",
			'zh-cn': "擲2次硬幣，造成正面出現的次數×20點傷害。",
			ja: "コインを2回投げ、オモテの数×20ダメージ。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [170],

	thirdParty: {
		cardmarket: 779044
	}
}

export default card