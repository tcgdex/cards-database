import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ユクシー"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [480],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "知識の神と 呼ばれている。 目を 合わせた 者の 記憶を 消してしまう 力を 持つという。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "いたみのきおく"
		},

		effect: {
			ja: "相手のポケモン全員に、それぞれダメカンを2個のせる。"
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