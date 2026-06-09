import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "啃果蟲",
		'zh-cn': "啃果蟲",
		ja: "カジッチュ"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 40,
	types: ["Dragon"],

	description: {
		'zh-tw': "平時都在蘋果中生活。 如果失去了蘋果，身體的 水分就會流失而變得虛弱。",
		'zh-cn': "平時都在蘋果中生活。 如果失去了蘋果，身體的 水分就會流失而變得虛弱。",
		ja: "りんごの 中で 暮らしている。 りんごが なくなると 体の 水分が 抜けて 弱ってしまう。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "營養素",
			'zh-cn': "營養素",
			ja: "えいようそ"
		},

		effect: {
			'zh-tw': "將自己的1隻寶可夢恢復「30」HP。",
			'zh-cn': "將自己的1隻寶可夢恢復「30」HP。",
			ja: "自分のポケモン1匹のHPを「30」回復する。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "打滾",
			'zh-cn': "打滾",
			ja: "ころばす"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。",
			'zh-cn': "擲1次硬幣若為正面，則增加30點傷害。",
			ja: "コインを1回投げオモテなら、30ダメージ追加。"
		},

		damage: "20＋",
		cost: ["Grass", "Fire"]
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [840],

	thirdParty: {
		cardmarket: 787605
	}
}

export default card