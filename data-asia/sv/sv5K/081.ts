import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ペラップ"
	},

	illustrator: "Scav",
	category: "Pokemon",
	dexId: [441],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "相手と 同じ 鳴き声を 出す ことで 仲間と 思いこませて 襲われないように しているのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "アカペラ"
		},

		effect: {
			ja: "自分の山札からたねポケモンを3枚まで選び、ベンチに出す。そして山札を切る。"
		}
	}, {
		cost: ["Colorless"],

		name: {
			ja: "かぜおこし"
		},

		damage: 20
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