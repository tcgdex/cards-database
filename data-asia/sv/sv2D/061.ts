import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤヤコマ"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [661],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "普段は 穏やかな 気性だが 戦いになると ホルモンバランスが 変わり 攻撃的になる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "きゅうこうか"
		},

		damage: 30,

		effect: {
			ja: "このポケモンにも10ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card