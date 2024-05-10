import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "モンジャラ",
		'zh-tw': "蔓藤怪"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	dexId: [114],
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "ちぎれても 無限に 伸びる ツルの 奥の 正体は いまだ 解明されていない。",
		'zh-tw': "藤蔓即使斷了也會繼續無限地生長。藤蔓下的真面目至今仍是個謎。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "まきつきさほう",
			'zh-tw': "緊束作法"
		},

		damage: "10+",

		effect: {
			ja: "この番、手札から「エリカの招待」を出して使っていたなら、60ダメージ追加。",
			'zh-tw': "在這個回合，若從手牌使出了「莉佳的招待」，則增加60點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card