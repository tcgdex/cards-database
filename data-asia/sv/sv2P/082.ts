import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ココガラ"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	dexId: [821],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "勇敢で 向こう見ずな 気質。 目の まわりの 白い 模様は 気弱な ポケモンを 怯ませる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "つきかえす"
		},

		damage: 10,

		effect: {
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card