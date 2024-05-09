import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "アーボ"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [23],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "育つほどに どんどん 長くなる。 そして 夜中は 木の枝に グルグルと 絡まって 休む。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "まぜこみどく"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをどくとこんらんにする。"
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "かみつく"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card