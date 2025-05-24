import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "エレブー",
		'zh-tw': "電擊獸",
		'zh-cn': "電擊獸"
	},

	illustrator: "Amelicart",
	rarity: "Common",
	category: "Pokemon",
	dexId: [125],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "全身から つねに 電気が 放たれているため 近づくと 髪の毛が 逆立ってしまう。",
		'zh-tw': "身體隨時都在放電， 所以只要靠近牠， 頭髮就會倒豎起來。",
		'zh-cn': "身體隨時都在放電， 所以只要靠近牠， 頭髮就會倒豎起來。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "エレキスラッグ",
			'zh-tw': "電氣猛擊",
			'zh-cn': "電氣猛擊"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card