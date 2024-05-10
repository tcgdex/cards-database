import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ドラメシヤ",
		'zh-tw': "多龍梅西亞"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Scav",
	dexId: [885],
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "食べもしないのに ウデッポウに 食らいつくのは 生きていたころの 行動の 名残りと 言われている。",
		'zh-tw': "明明不吃卻又愛死咬著 鐵臂槍蝦不放，聽說是牠 生前殘留下來的活動習性。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ちょっとうらむ",
			'zh-tw': "咒怨一下"
		},

		damage: 10
	}, {
		cost: ["Fire", "Psychic"],

		name: {
			ja: "かみつく",
			'zh-tw': "咬住"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card