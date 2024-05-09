import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "オーロット"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Oswaldo KATO",
	dexId: [709],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "森に 棲む ポケモンには とても 優しい。 頭の しげみを 棲み処にされても 気にしない。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "ギガドレイン"
		},

		damage: 50,

		effect: {
			ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。"
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "フォレストダンプ"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card
