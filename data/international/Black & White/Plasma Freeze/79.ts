import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Steelix",
		'fr-fr': "Steelix",
		'es-es': "Steelix",
		'it-it': "Steelix",
		'pt-br': "Steelix",
		'de-de': "Stahlos"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		208,
	],

	hp: 150,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Onix",
		'fr-fr': "Onix",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Metal Defender",
				'fr-fr': "Défense Métallique",
			},
			effect: {
				'en-us': "During your opponent's next turn, this Pokémon has no Weakness.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon n'a pas de Faiblesse.",
			},
			damage: 50,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Impact",
				'fr-fr': "Gros Impact",
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "The iron it ingested with the soil it swallowed transformed its body and made it harder than diamonds.",
	},

	thirdParty: {
		cardmarket: 280957,
		tcgplayer: 89565
	}
}

export default card
