import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "オノンド"
	},

	illustrator: "Uninori",
	rarity: "Common",
	category: "Pokemon",
	dexId: [611],
	hp: 100,
	types: ["Dragon"],

	description: {
		ja: "太い キバを 使って 獲物を きれいに 捌いて 食べるものと 保存する ものに 分けるのだ。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "きんちょうかん"
		},

		effect: {
			ja: "このポケモンは、相手が手札からグッズまたはサポートを出して使ったとき、その効果を受けない。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Metal"],

		name: {
			ja: "りゅうのはどう"
		},

		damage: 80,

		effect: {
			ja: "自分の山札を上から1枚トラッシュする。"
		}
	}],

	retreat: 2
}

export default card