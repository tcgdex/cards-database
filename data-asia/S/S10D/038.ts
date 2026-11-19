import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "コジョンド",
		'zh-tw': "師父鼬"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	dexId: [620],
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		ja: "コジョフー"
	},

	description: {
		ja: "真の 強敵と 会うと 身軽に なるため 両手の 毛を 噛み千切り 捨ててしまう。",
		'zh-tw': "當牠遇上真正的強敵時，會將雙臂的毛咬斷丟棄， 讓自己的身體更加輕盈。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "はたく",
			'zh-tw': "拍擊"
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			ja: "ダブルスマッシュ",
			'zh-tw': "雙重粉碎"
		},

		effect: {
			ja: "コインを2回投げ、オモテの数×70ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×70點傷害。"
		},

		damage: "70×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651006,
				tcgplayer: 569793,
				cardtrader: 234104,
			},
		},
	]
}

export default card