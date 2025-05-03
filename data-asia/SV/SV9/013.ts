import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ブーバー",
		'zh-tw': "鴨嘴火獸",
		'zh-cn': "鴨嘴火獸"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	dexId: [126],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "火山の 火口近くで 見つかった。 口から 炎を 吐く。 体温は １２００度もある。",
		'zh-tw': "在火山口附近被發現。 會從口中吐出火焰。 體溫高達１２００度。",
		'zh-cn': "在火山口附近被發現。 會從口中吐出火焰。 體溫高達１２００度。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "やきこがす",
			'zh-tw': "灼燒",
			'zh-cn': "灼燒"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをやけどにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【灼傷】。",
			'zh-cn': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【灼傷】。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card