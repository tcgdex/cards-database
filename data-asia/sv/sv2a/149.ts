import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カイリュー"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [149],
	hp: 180,
	types: ["Dragon"],

	description: {
		ja: "広い 海の どこかには カイリューだけが 集まって 暮らす 島が あるらしい。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ジェットクルーズ"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分のポケモン全員のにげるためのエネルギーは、すべてなくなる。"
		}
	}],

	attacks: [{
		cost: ["Water", "Lightning"],

		name: {
			ja: "りゅうのはどう"
		},

		damage: 180,

		effect: {
			ja: "自分の山札を上から2枚トラッシュする。"
		}
	}],

	retreat: 3
}

export default card