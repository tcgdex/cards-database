import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "パラセクト"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [47],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "ムシの 方は ほぼ 死んでいて 本体は 背中の キノコだ。 もげると もう 動かなくなる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "きんしをばらまく"
		},

		effect: {
			ja: "コインを2回投げ、オモテの数ぶんまで、自分の山札からポケモンを選び、ベンチに出す。そして山札を切る。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ツメできりさく"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card