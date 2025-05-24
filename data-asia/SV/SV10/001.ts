import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "榛果球",
		'zh-cn': "榛果球",
		ja: "クヌギダマ"
	},

	illustrator: "YASHIRO Nanaco",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "最喜歡把樹皮 疊在身上加厚外殼。 就算因此變重也毫不在意。",
		'zh-cn': "最喜歡把樹皮 疊在身上加厚外殼。 就算因此變重也毫不在意。",
		ja: "木の 皮を 重ね合わせて 殻を 分厚くするのが 大好き。 重くなっても 気にしない。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "垂吊",
			'zh-cn': "垂吊",
			ja: "ぶらさがる"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [204]
}

export default card