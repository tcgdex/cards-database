import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒトツキ",
		'zh-tw': "獨劍鞘"
	},

	illustrator: "aoki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [679],
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "剣の 鍔の 青い 目玉が ヒトツキの 本体。 古びた 布で 人の 生気を 吸い取る。",
		'zh-tw': "獨劍鞘護手上的藍色眼珠是牠的本體。 會用陳舊的布吸取人類的精氣。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "きる",
			'zh-tw': "切"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card