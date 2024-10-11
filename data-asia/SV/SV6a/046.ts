import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "オノノクス"
	},

	illustrator: "Tsuyoshi Nagano",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [612],
	hp: 170,
	types: ["Dragon"],

	description: {
		ja: "自慢の キバで 敵を 圧倒。 鉄塔を 一刀のもとに 切り捨てる 切れ味を 誇る。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "アックスダウン"
		},

		effect: {
			ja: "相手のバトルポケモンに特殊エネルギーがついているなら、そのポケモンをきぜつさせる。"
		}
	}, {
		cost: ["Fighting", "Metal"],

		name: {
			ja: "りゅうのはどう"
		},

		damage: 230,

		effect: {
			ja: "自分の山札を上から3枚トラッシュする。"
		}
	}],

	retreat: 2
}

export default card