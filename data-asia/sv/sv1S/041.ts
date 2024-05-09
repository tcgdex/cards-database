import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ルカリオ"
	},

	illustrator: "Nurikabe",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [448],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "波動を キャッチすることで 見えない 相手の 姿でも 見えると 言われている。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "アベンジナックル"
		},

		damage: "30＋",

		effect: {
			ja: "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、120ダメージ追加。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "かそくづき"
		},

		damage: 120,

		effect: {
			ja: "次の自分の番、このポケモンは「かそくづき」が使えない。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card