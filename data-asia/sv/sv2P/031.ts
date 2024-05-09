import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴチム"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	dexId: [574],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "いつもは とっても 無邪気。 見えない なにかを 見ているときは 瞬きも せずに ずっと 無言。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はたく"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ぶきみなねんぱ"
		},

		damage: 20,

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