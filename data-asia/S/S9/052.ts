import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "朝北鼻",
		ja: "ノズパス"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "牠會動也不動地用強大的磁力把獵物吸過來獵捕， 但有時也會把天敵吸來。",
		ja: "強力な 磁力で 獲物を 引き寄せ 動かず 狩りを するが 天敵を 引き寄せることもある。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝撞",
			ja: "ぶつかる"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F",
	rarity: "Common",
	dexId: [299],

	thirdParty: {
		cardmarket: 605903
	}
}

export default card