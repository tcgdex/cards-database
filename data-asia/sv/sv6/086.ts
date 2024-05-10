import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "エイパム",
		'zh-tw': "長尾怪手"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Mugi Hamada",
	dexId: [190],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "手よりも 自由自在に 動く 尻尾を 巧みに 操りながら 高い 木の上で 暮らしている。",
		'zh-tw': "會巧妙地操縱比雙手 還靈活的尾巴， 生活在高高的樹上。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ぶらさがる",
			'zh-tw': "垂吊"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "やんちゃげり",
			'zh-tw': "調皮踢"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card