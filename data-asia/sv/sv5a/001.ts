import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "モンジャラ",
		'zh-tw': "蔓藤怪"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [114],
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "ちぎれても 無限に 伸びる ツルの 奥の 正体は いまだ 解明されていない。",
		'zh-tw': "藤蔓即使斷了也會繼續無限地生長。藤蔓下的 真面目至今仍是個謎。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ひっぱたく",
			'zh-tw': "重摑"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "つるでうつ",
			'zh-tw': "藤蔓攻擊"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card