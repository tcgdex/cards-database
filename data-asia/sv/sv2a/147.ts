import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミニリュウ",
		'zh-tw': "迷你龍"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	dexId: [147],
	hp: 60,
	types: ["Dragon"],

	description: {
		ja: "激しく 流れ落ちる 滝に 守られながら 脱皮を 繰り返し どんどん 大きくなる。",
		'zh-tw': "會在直瀉而下的瀑布保護下反覆蛻皮， 使身體變得越來越大。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "たたく",
			'zh-tw': "敲擊"
		},

		damage: 10
	}, {
		cost: ["Water", "Lightning"],

		name: {
			ja: "ドラゴンウィップ",
			'zh-tw': "龍之鞭打"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card