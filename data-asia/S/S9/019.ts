import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小火焰猴",
		ja: "ヒコザル"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 50,
	types: ["Fire"],

	description: {
		'zh-tw': "肚子產生的瓦斯在屁股上燃燒。如果身體狀況不好的話， 火焰就會變弱。",
		ja: "お腹で 作られた ガスが お尻で 燃えている。 体調が 悪いと 炎が 弱くなる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "火花",
			ja: "ひのこ"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [390]
}

export default card