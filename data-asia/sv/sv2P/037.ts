import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ベラカス"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [954],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "玉を 支える 体は ほとんど 動かないため 本体は 玉の中にいると 考えられている。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "さいきのいのり"
		},

		effect: {
			ja: "自分のトラッシュからポケモンを1枚選び、ベンチに出す。"
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "サイケこうせん"
		},

		damage: 50,

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

	retreat: 1
}

export default card