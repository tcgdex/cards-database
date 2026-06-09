import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "功夫鼬",
		'zh-cn': "功夫鼬",
		ja: "コジョフー"
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'zh-tw': "與群體的夥伴們一起在深山裡 閉關修行。不同的群體有著不同的 踢腿和手刀技法。",
		'zh-cn': "與群體的夥伴們一起在深山裡 閉關修行。不同的群體有著不同的 踢腿和手刀技法。",
		ja: "山奥に こもり 群れの 仲間と 修行に 励む。 群れによって キックや チョップの型が 違う。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "拍落",
			'zh-cn': "拍落",
			ja: "はたきおとす"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，從對手的手牌選擇1張，將其丟棄。",
			'zh-cn': "在不看正面的情況下，從對手的手牌選擇1張，將其丟棄。",
			ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。"
		},

		damage: 10,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [619],

	thirdParty: {
		cardmarket: 779069
	}
}

export default card