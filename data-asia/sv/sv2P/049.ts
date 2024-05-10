import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "マフィティフ",
		'zh-tw': "獒教父"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [943],
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "大きな のど袋に エネルギーを 蓄えることができる。 一気に 放出して 敵を 吹き飛ばす。",
		'zh-tw': "大大的喉囊裡可以儲存能量。會一口氣 釋放出去把敵人轟飛。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ほうふく",
			'zh-tw': "復仇"
		},

		damage: 20,

		effect: {
			ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、受けたダメージぶんのダメカンを、ワザを使ったポケモンにのせる。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害時，將與受到的傷害相同數值的傷害指示物，放置於使用招式的寶可夢身上。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "やみのキバ",
			'zh-tw': "暗之牙"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card