import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>臭泥",
		'zh-cn': "<火箭隊的>臭泥",
		ja: "ロケット団のベトベター"
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'zh-tw': "污泥變成的寶可夢。 會聚集在骯髒的地方 來繁殖身體的細菌。",
		'zh-cn': "污泥變成的寶可夢。 會聚集在骯髒的地方 來繁殖身體的細菌。",
		ja: "ヘドロが ポケモンになった。 汚い 場所に 集まって 体の ばい菌を 増やしていく。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "浸蝕污泥",
			'zh-cn': "浸蝕污泥",
			ja: "しんしょくヘドロ"
		},

		effect: {
			'zh-tw': "在下個對手的回合結束時，將受到這個招式的寶可夢與附加的卡全部丟棄。",
			'zh-cn': "在下個對手的回合結束時，將受到這個招式的寶可夢與附加的卡全部丟棄。",
			ja: "次の相手の番の終わりに、このワザを受けたポケモンと、ついているすべてのカードを、トラッシュする。"
		},

		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [88]
}

export default card