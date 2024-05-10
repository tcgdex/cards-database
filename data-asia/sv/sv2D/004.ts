import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "クヌギダマ",
		'zh-tw': "榛果球"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [204],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "木の 皮を 重ね合わせて 殻を 分厚くするのが 大好き。 重くなっても 気にしない。",
		'zh-tw': "最喜歡把樹皮疊在身上加厚外殼。 就算因此變重也毫不在意。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			ja: "ころがる",
			'zh-tw': "滾動"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card