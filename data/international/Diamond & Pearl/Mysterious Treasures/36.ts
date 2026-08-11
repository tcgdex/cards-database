import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Toxicroak",
		'fr-fr': "Coatox",
		'de-de': "Toxiquak"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		454,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Poison Sacs",
				'fr-fr': "Sacs de poison",
				'de-de': "Gifttaschen"
			},
			effect: {
				'en-us': "Your opponent can't remove the Special Condition Poisoned by evolving or devolving his or her Poisoned Pokémon. (This also includes putting a Pokémon Level-Up card onto the Poisoned Pokémon.)",
				'fr-fr': "Votre adversaire ne peut pas retirer l'État Spécial Empoisonné en faisant évoluer ou en désévoluant ses Pokémon Empoisonnés. (Placer une carte Pokémon Niveau Sup sur le Pokémon Empoisonné inclus.)",
				'de-de': "Dein Gegner kann den Speziellen Zustand \"vergiftet\" von seinen Pokémon nicht durch Entwickeln oder Rückentwickeln entfernen. (Dies gilt auch für das Spielen einer Pokémon Level-Up-Karte auf das vergiftete Pokémon.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Knuckle Claws",
				'fr-fr': "Griffes articulées",
				'de-de': "Knöchelkralle"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Its knuckle claws secrete a toxin so vile that even a scratch could prove fatal.",
		'fr-fr': "Les griffes de ses poings sécrètent une toxine si atroce qu'une simple égratignure peut s'avérer fatale."
	},

	thirdParty: {
		cardmarket: 277665,
		tcgplayer: 90007
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
