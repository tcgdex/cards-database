import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ランクルス"
	},

	illustrator: "Gemi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [579],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "超能力を 使うよりも 自慢の 腕を ぶん回して 殴り倒すのを 好んでいる。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "サモンゲート"
		},

		effect: {
			ja: "自分の山札を上から8枚見て、その中からポケモンを好きなだけ選び、ベンチに出す。残りのカードは山札にもどして切る。"
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ブレインシェイク"
		},

		damage: 100,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2
}

export default card