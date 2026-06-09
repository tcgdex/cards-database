import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪納霏",
		ja: "マナフィ"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "有著能與任何寶可夢心意相通的神奇能力。",
		ja: "どんな ポケモンとでも 心を 通い合わせる ことが できる 不思議な 能力を 持っている。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "浪之幕",
			ja: "なみのヴェール"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有備戰寶可夢不會受到對手的招式的傷害。",
			ja: "このポケモンがいるかぎり、自分のベンチポケモン全員は、相手のワザのダメージを受けない。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "潑水",
			ja: "みずかけ"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [490],

	thirdParty: {
		cardmarket: 605882
	}
}

export default card