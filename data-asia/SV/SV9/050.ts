import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤンチャム",
		'zh-tw': "頑皮熊貓",
		'zh-cn': "頑皮熊貓"
	},

	illustrator: "Yuriko Akase",
	rarity: "Common",
	category: "Pokemon",
	dexId: [674],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "なめられないように いつも 相手を 睨みつけているが 気が 緩むと つい 笑い顔に なってしまう。",
		'zh-tw': "為了不被小看而一直瞪著對手， 然而繃緊的神經一旦稍有放鬆， 牠就會在無意中露出笑臉。",
		'zh-cn': "為了不被小看而一直瞪著對手， 然而繃緊的神經一旦稍有放鬆， 牠就會在無意中露出笑臉。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "どつく",
			'zh-tw': "推擊",
			'zh-cn': "推擊"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "きあいづき",
			'zh-tw': "真氣突刺",
			'zh-cn': "真氣突刺"
		},

		damage: 50,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			'zh-cn': "擲1次硬幣若為反面，則這個招式失敗。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card