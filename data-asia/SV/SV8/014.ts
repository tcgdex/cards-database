import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ウルガモス"
	},

	illustrator: "matazo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [637],
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "炎の りんぷんを まき散らす。 危険なのは 高熱よりも あたりの 酸素が なくなること。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "きゅうけつ"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。"
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "どとうのはばたき"
		},

		damage: 150,

		effect: {
			ja: "このポケモンにも50ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card