import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カイリキー"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [68],
	hp: 180,
	types: ["Fighting"],

	description: {
		ja: "４本の 腕は 考えるより 早く 反射的に 動き 何発もの パンチを 繰りだせる。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "こんじょう"
		},

		effect: {
			ja: "このポケモンが、ワザのダメージを受けてきぜつするとき、自分はコインを1回投げる。オモテなら、このポケモンはきぜつせず、残りHPが「10」の状態で場に残る。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "マウンテンチョップ"
		},

		damage: 100,

		effect: {
			ja: "相手の山札を上から2枚トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card