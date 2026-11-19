import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "コドラ"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [305],
	hp: 80,
	types: ["Metal"],

	evolveFrom: {
		ja: "ココドラ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "マグニチュード"
		},

		effect: {
			ja: "おたがいのベンチポケモン全員にも、それぞれ10ダメージ。"
		},

		damage: 20,
		cost: ["Metal"]
	}, {
		name: {
			ja: "にだんづき"
		},

		effect: {
			ja: "コインを2回投げ、オモテ×20ダメージを追加する。"
		},

		damage: "30+",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784534,
				tcgplayer: 613070,
				cardtrader: 138034,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784534,
				tcgplayer: 613070,
				cardtrader: 138034,
			},
		},
	]
}

export default card
