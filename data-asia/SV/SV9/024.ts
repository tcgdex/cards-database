import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ホエルコ",
		'zh-tw': "吼吼鯨",
		'zh-cn': "吼吼鯨"
	},

	illustrator: "Shinya Mizuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [320],
	hp: 130,
	types: ["Water"],

	description: {
		ja: "海水を たくさん 飲みこむと 体が ボールの ように 弾む。 毎日 １トンの エサを 食べる。",
		'zh-tw': "喝入大量的海水之後， 身體會鼓成像球一樣。 每天要吃掉１噸的食物。",
		'zh-cn': "喝入大量的海水之後， 身體會鼓成像球一樣。 每天要吃掉１噸的食物。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "なみのり",
			'zh-tw': "衝浪",
			'zh-cn': "衝浪"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card