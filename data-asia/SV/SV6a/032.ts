import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゾロアーク"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [571],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "いっぺんに 大勢の 人を 化かす 力を 持つ。 幻の 景色を 見せて 棲み処を 守る。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "げんえいジャック"
		},

		damage: "60×",

		effect: {
			ja: "相手の場の「ポケモンex・V」の数×60ダメージ。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ツメできりさく"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card