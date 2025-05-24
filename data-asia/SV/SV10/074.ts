import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "盔甲鳥",
		'zh-cn': "盔甲鳥",
		ja: "エアームド"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		'zh-tw': "鐵的身體雖然看起來結實沉重， 但其實又薄又輕，因此牠的 飛行速度可達時速３００公里。",
		'zh-cn': "鐵的身體雖然看起來結實沉重， 但其實又薄又輕，因此牠的 飛行速度可達時速３００公里。",
		ja: "頑丈で 重そうな 鉄の 体だが 薄くて 軽いので 時速３００キロで とべる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "羽棲",
			'zh-cn': "羽棲",
			ja: "はねやすめ"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「50」HP。在下個自己的回合，這隻寶可夢無法撤退。",
			'zh-cn': "將這隻寶可夢恢復「50」HP。在下個自己的回合，這隻寶可夢無法撤退。",
			ja: "このポケモンのHPを「50」回復する。次の自分の番、このポケモンはにげられない。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "金屬爪",
			'zh-cn': "金屬爪",
			ja: "メタルクロー"
		},

		damage: 60,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [227]
}

export default card