import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "アリアドス"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [168],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "決まった 場所に 巣を作らず あたりが 暗くなってから エサを 探し求め うろつく。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ビッグネット"
		},

		effect: {
			ja: "このポケモンがいるかぎり、相手のバトル場の進化ポケモンのにげるためのエネルギーは、1個ぶん多くなる。"
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "いとがらめ"
		},

		damage: "10＋",

		effect: {
			ja: "相手のバトルポケモンのにげるためのエネルギーの数×30ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card