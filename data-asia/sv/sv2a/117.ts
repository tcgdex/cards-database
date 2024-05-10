import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "シードラ",
		'zh-tw': "海刺龍"
	},

	illustrator: "aspara",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [117],
	hp: 80,
	types: ["Water"],

	description: {
		ja: "細い 口だが 吸引力は 強い。 口より 大きな エサも 一瞬で 吸いこみ 食べるぞ。",
		'zh-tw': "嘴部雖然細，但吸力卻很強。就算是比嘴還要大的食物， 也都能瞬間吸進口裡吃掉。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ブラインドインク",
			'zh-tw': "盲目塗墨"
		},

		damage: 50,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを2回投げる。1回でもウラなら、そのワザは失敗。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式時，對手擲2次硬幣。只要出現1次反面，則那個招式失敗。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card