import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "マタドガス"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [110],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		ja: "ドガース"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "こんらんガス"
		},

		effect: {
			ja: "相手をこんらんにする。"
		},

		damage: 10,
		cost: ["Grass"]
	}, {
		name: {
			ja: "いたいガス"
		},

		effect: {
			ja: "相手のバトルポケモン全員を、それぞれどくにし、相手のベンチポケモン全員に、それぞれ10ダメージ。"
		},

		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784486,
				tcgplayer: 613078,
				cardtrader: 137986,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784486,
				tcgplayer: 613078,
				cardtrader: 137986,
			},
		},
	]
}

export default card
