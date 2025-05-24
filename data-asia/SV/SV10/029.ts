import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "刺梭魚",
		'zh-cn': "刺梭魚",
		ja: "サシカマス"
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "游泳只能游直線。因吃太飽 而行動變得遲緩的個體 會先遭到電海燕的群體襲擊。",
		'zh-cn': "游泳只能游直線。因吃太飽 而行動變得遲緩的個體 會先遭到電海燕的群體襲擊。",
		ja: "真っ直ぐにしか 速く 泳げない。 食べ過ぎて 動きが 鈍いものから カイデンの 群れに 狙われる。"
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
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [846]
}

export default card