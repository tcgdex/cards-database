import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "クスネ",
		'zh-tw': "偷兒狐"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	dexId: [827],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "ほかの ポケモンが みつけた 餌を 掠めて 暮らしている。 ふかふかの 肉球は 足音を たてない。",
		'zh-tw': "靠搶奪其他寶可夢找到的食物為生。腳上長著軟乎乎的肉球， 走路時不會發出絲毫聲響。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "うしろげり",
			'zh-tw': "後踢"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651010,
				tcgplayer: 569797,
				cardtrader: 234108,
			},
		},
	]
}

export default card