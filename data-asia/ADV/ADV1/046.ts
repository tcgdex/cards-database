import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ニューラex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [215],
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "ex",

	attacks: [{
		name: {
			ja: "ダブルひっかき"
		},

		effect: {
			ja: "コインを2回投げ、オモテ×10ダメージ。"
		},

		damage: "10×",
		cost: ["Darkness"]
	}, {
		name: {
			ja: "ふくろだたき"
		},

		effect: {
			ja: "自分のポケモンの数ぶんコインを投げ、オモテ×20ダメージ。"
		},

		damage: "20×",
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-30"
	}],

	retreat: 1,
	variants: [
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784530,
				tcgplayer: 613083,
				cardtrader: 138030,
			},
		},
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784530,
				tcgplayer: 613083,
				cardtrader: 138030,
			},
		},
	]
}

export default card
