import { Card } from "../../../interfaces"
import Set from "../S6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "索羅亞克"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "據說當牠的棲息地快要暴露在人類面前時，牠會製造出幻影，讓人在森林裡不斷徘徊。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "幻影變化"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的棄牌區選擇1張【1階進化】寶可夢卡（「索羅亞克」除外）。然後，將這隻寶可夢與附加的卡全部丟棄，將所選的寶可夢放置於這隻寶可夢原先所在的地方。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "暗黑爆破"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card