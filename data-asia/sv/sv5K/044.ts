import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "アーボック"
	},

	illustrator: "Minato",
	rarity: "Common",
	category: "Pokemon",
	dexId: [24],
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "お腹の 模様が 怖い 顔に 見える。 弱い 敵は その模様を 見ただけで 逃げ出してしまう。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "パニックどく"
		},

		effect: {
			ja: "相手のバトルポケモンをどくとやけどとこんらんにする。"
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "やみのキバ"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card