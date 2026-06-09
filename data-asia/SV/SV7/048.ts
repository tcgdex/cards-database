import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡拉卡拉",
		'zh-cn': "卡拉卡拉",
		ja: "カラカラ"
	},

	illustrator: "svlt",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "當牠想起與自己死別的 母親而哭泣時，哭聲就會在 頭上戴的骨頭中哀傷地迴盪。",
		'zh-cn': "當牠想起與自己死別的 母親而哭泣時，哭聲就會在 頭上戴的骨頭中哀傷地迴盪。",
		ja: "死に別れた 母親を 思い出し 泣くと 頭に 被った 骨の 中で 物悲しく 響くのだ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "突擊",
			'zh-cn': "突擊",
			ja: "とつげき"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			'zh-cn': "這隻寶可夢也受到10點傷害。",
			ja: "このポケモンにも10ダメージ。"
		},

		damage: 30,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [104],

	thirdParty: {
		cardmarket: 779062
	}
}

export default card