import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "カゲボウズ"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [353],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "だれかが だれかを 恨む 暗く 哀しい 気持ちを 吸い取って じわじわ 強くなる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "かげでつつむ"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、相手は手札からグッズを出して使えない。"
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