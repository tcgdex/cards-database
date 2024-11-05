import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "アローラ ディグダ"
	},

	illustrator: "Akino Fukuji",
	rarity: "Common",
	category: "Pokemon",
	dexId: [50],
	hp: 50,
	types: ["Metal"],

	description: {
		ja: "金色の 髭は センサー機能を 持っている。 穴から だして 周りの 様子を うかがっている。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "ふいをつく"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 1
}

export default card