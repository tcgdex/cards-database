import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Excadrill ex",
		fr: "Méga-Minotaupe-ex",
		es: "Mega-Excadrill ex",
		'es-mx': "Mega-Excadrill ex",
		de: "Mega-Stalobor-ex"
	},

	illustrator: "Keisuke Azuma",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [530],
	hp: 340,
	types: ["Metal"],

	evolveFrom: {
		en: "Drilbur"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Undermine"
		},

		cost: ["Metal", "Metal"],

		damage: 90,

		effect: {
			en: "Discard the top 2 cards of your opponent's deck"
		}
	}, {
		name: {
			en: "Maximum Drilling"
		},

		cost: ["Metal", "Metal"],

		damage: "200+",

		effect: {
			en: "If you have at least 2 extra Energy attached to this Pokémon, this attack does 130 more damage"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895888,
				tcgplayer: 704860
			}
		},
	],
}

export default card
