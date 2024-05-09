import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ヨルノズク"
	},

	illustrator: "toi8",
	rarity: "Common",
	category: "Pokemon",
	dexId: [164],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "特殊な つくりの 両目は わずかな 光さえ あれば 暗闇でも 昼のように 見える。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かぎづめハント"
		},

		damage: 70,

		effect: {
			ja: "のぞむなら、自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。"
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