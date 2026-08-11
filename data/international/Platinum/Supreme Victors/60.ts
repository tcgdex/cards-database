import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Garchomp C",
		fr: "Carchacrok ",
		de: "Knakrack C"
	},
	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [445],
	hp: 80,
	types: [
		"Colorless"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Swipe",
				fr: "Combo-serres",
				de: "Klauenschlag"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Earthquake",
				fr: "Séisme",
				de: "Erdbeben"
			},
			effect: {
				en: "This attack does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de votre Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 449563,
				tcgplayer: 85628
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85628,
				cardmarket: 449563,
			}
		},
		{
			type: "normal",
			foil: 'league',
			thirdParty: {
				cardmarket: 449563,
				tcgplayer: 262156
			}
		},
		{
			type: "normal",
			foil: 'league',
			stamp: ["staff"],
			thirdParty: {
				tcgplayer: 262158
			}
		},
		{
			type: "normal",
			stamp: ["yuta-komatsuda"],
			thirdParty: {
				cardmarket: 868740,
				tcgplayer: 480046
			}
		}
	],

}

export default card
