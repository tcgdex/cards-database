import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "カスミのコイキング",
		'zh-tw': "<小霞的>鯉魚王",
		'zh-cn': "<小霞的>鯉魚王"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [129],
	hp: 30,
	types: ["Water"],

	description: {
		ja: "力のない 情けない ポケモン。 たまに 高く 飛び跳ねても ２メートルを 超すのが やっとだ。",
		'zh-tw': "沒力量的可憐寶可夢。 偶爾跳得比較高時， 也只是勉強高過2公尺而已。",
		'zh-cn': "沒力量的可憐寶可夢。 偶爾跳得比較高時， 也只是勉強高過2公尺而已。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "すごいもぐる",
			'zh-tw': "深度下潛",
			'zh-cn': "深度下潛"
		},

		effect: {
			ja: "このポケモンは、ベンチにいるかぎり、相手のポケモンからワザのダメージや効果を受けない。",
			'zh-tw': "只要這隻寶可夢在備戰區，不會受到對手的寶可夢招式的傷害與效果的影響。",
			'zh-cn': "只要這隻寶可夢在備戰區，不會受到對手的寶可夢招式的傷害與效果的影響。"
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "はねる",
			'zh-tw': "躍起",
			'zh-cn': "躍起"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card