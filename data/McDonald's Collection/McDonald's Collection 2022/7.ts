import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	illustrator: "chibi",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [25],

	hp: 60,

	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				en: "Energize",
			},
			effect: {
				en: "Attach a Lightning Energy card from your discard pile to this Pokémon."
			}
		},
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: {
				en: "Electro Ball",
				fr: "Boule Élek",
				es: "Bola Voltio",
				it: "Energisfera",
				pt: "Bola Elétrica",
				de: "Elektroball"
			},
			damage: 30,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670472,
				tcgplayer: 282523
			}
		}
	]
}

export default card

