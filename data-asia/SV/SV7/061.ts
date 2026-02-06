import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "溶食獸",
		'zh-cn': "溶食獸",
		ja: "ゴクリン"
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "心臟和大腦都很小， 身體的大部分是胃。 會分泌出什麼都能溶解的胃液。",
		'zh-cn': "心臟和大腦都很小， 身體的大部分是胃。 會分泌出什麼都能溶解的胃液。",
		ja: "心臓や 脳みそは 小さく 体の 大部分が 胃袋。 なんでも 溶かす 胃液を 出す。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "口水",
			'zh-cn': "口水",
			ja: "よだれ"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "毒之氣息",
			'zh-cn': "毒之氣息",
			ja: "どくのいき"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			'zh-cn': "將對手的戰鬥寶可夢【中毒】。",
			ja: "相手のバトルポケモンをどくにする。"
		},

		damage: 30,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [316],

	thirdParty: {
		cardmarket: 779075
	}
}

export default card