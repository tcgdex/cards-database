import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ザングース"
	},

	illustrator: "Ligton",
	rarity: "Common",
	category: "Pokemon",
	dexId: [335],
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "ハブネークに 出会うと 体毛が 逆立ち 攻撃態勢になる。 鋭い ツメが 最大の 武器。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "れんぞくぎり"
		},

		damage: "10＋",

		effect: {
			ja: "コインを3回投げる。オモテが1回なら、20ダメージ追加。オモテが2回なら、50ダメージ追加。すべてオモテなら、80ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card