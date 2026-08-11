import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv",
		'es-es': "Grimer",
		'it-it': "Grimer",
		'pt-br': "Grimer",
		'de-de': "Sleima"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Lure Poison",
				'fr-fr': "Appât Vénéneux",
			},
			effect: {
				'en-us': "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with the Defending Pokémon. The new Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, échangez 1 des Pokémon de Banc de votre adversaire avec le Pokémon Défenseur. Le nouveau Pokémon Défenseur est maintenant Empoisonné.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sludge Toss",
				'fr-fr': "Giclée Vaseuse",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Born from sludge, these Pokémon now gather in polluted places and increase the bacteria in their bodies.",
	},

	thirdParty: {
		cardmarket: 280923,
		tcgplayer: 85915
	}
}

export default card
