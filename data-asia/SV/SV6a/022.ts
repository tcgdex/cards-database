import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニンフィア"
	},

	illustrator: "Kuroimori",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [700],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "触角を なびかせ 軽やかに 舞う 姿は 優雅だが 技は 鋭く 急所を 狙う。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ミスティックリターン"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、相手の山札にもどして切る。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "チャームボイス"
		},

		damage: 90,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card