import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "デルビル",
		'zh-tw': "戴魯比"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [228],
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "仲間に 連絡するときと 獲物を 追いつめるときでは 鳴き声の 種類が 違うのだ。",
		'zh-tw': "聯絡夥伴和追趕獵物的時候，會分別發出 不同種類的叫聲。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かみつく",
			'zh-tw': "咬住"
		},

		damage: 10
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ほのお",
			'zh-tw': "火焰"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card