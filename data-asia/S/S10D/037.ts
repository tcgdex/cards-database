import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "コジョフー",
		'zh-tw': "功夫鼬"
	},

	illustrator: "yuu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [619],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "よく鍛えられた コジョフーは １分で １００回を 超える チョップを 打つことが できる。",
		'zh-tw': "千錘百鍊的功夫鼬能夠在１分鐘內使出 超過１００次的劈擊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "チョップ",
			'zh-tw': "劈打"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			ja: "かいてんげり",
			'zh-tw': "迴轉踢"
		},

		damage: 30,
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
				cardmarket: 651005,
				tcgplayer: 569792,
				cardtrader: 234103,
			},
		},
	]
}

export default card