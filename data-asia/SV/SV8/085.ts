import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ザングース",
		'zh-tw': "貓鼬斬",
		'zh-cn': "貓鼬斬"
	},

	illustrator: "Ligton",
	rarity: "Common",
	category: "Pokemon",
	dexId: [335],
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "ハブネークに 出会うと 体毛が 逆立ち 攻撃態勢になる。 鋭い ツメが 最大の 武器。",
		'zh-tw': "遇上飯匙蛇就會豎起體毛， 擺出攻擊的架勢。 銳利的爪子是最大的武器。",
		'zh-cn': "遇上飯匙蛇就會豎起體毛， 擺出攻擊的架勢。 銳利的爪子是最大的武器。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "れんぞくぎり",
			'zh-tw': "連斬",
			'zh-cn': "連斬"
		},

		damage: "10+",

		effect: {
			ja: "コインを3回投げる。オモテが1回なら、20ダメージ追加。オモテが2回なら、50ダメージ追加。すべてオモテなら、80ダメージ追加。",
			'zh-tw': "擲3次硬幣。若出現1次正面，則增加20點傷害。若出現2次正面，則增加50點傷害。若全部為正面，則增加80點傷害。",
			'zh-cn': "擲3次硬幣。若出現1次正面，則增加20點傷害。若出現2次正面，則增加50點傷害。若全部為正面，則增加80點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793519
	}
}

export default card