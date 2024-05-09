import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "キャモメ"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	dexId: [278],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "上昇 気流に 乗って グライダーのように 大空を 舞い くちばしに 挟んだ エサを運ぶ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かぜおこし"
		},

		damage: 30
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