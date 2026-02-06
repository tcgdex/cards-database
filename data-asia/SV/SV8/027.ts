import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "タマザラシ",
		'zh-tw': "海豹球",
		'zh-cn': "海豹球"
	},

	illustrator: "Teeziro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [363],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "ぶ厚い 脂肪に 包まれた 見事に まんまるな 体。 歩くより 転がるほうが 速い。",
		'zh-tw': "身體被厚厚的脂肪包裹著， 圓得令人讚嘆。用翻滾的 方式移動反而比走路還要快。",
		'zh-cn': "身體被厚厚的脂肪包裹著， 圓得令人讚嘆。用翻滾的 方式移動反而比走路還要快。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "こなゆき",
			'zh-tw': "細雪",
			'zh-cn': "細雪"
		},

		damage: 10,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			'zh-cn': "將對手的戰鬥寶可夢【睡眠】。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793461
	}
}

export default card