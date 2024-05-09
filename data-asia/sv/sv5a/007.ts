import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノイサハ"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1010],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "わずかな 目撃談によると 光り輝く 剣で 大木や 大岩を なます切りにしたという。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "リカバーネット"
		},

		effect: {
			ja: "自分のトラッシュからポケモンを2枚まで選び、相手に見せて、手札に加える。"
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "アベンジエッジ"
		},

		damage: "100＋",

		effect: {
			ja: "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、60ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card