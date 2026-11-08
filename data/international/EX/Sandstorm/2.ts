import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Cacturne",
		'fr-fr': "Cacturne",
		'de-de': "Noktuska"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [332],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Cacnea",
		'fr-fr': "Cacnea"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Poison Payback",
				'fr-fr': "Retour de poison",
				'de-de': "Poison Payback"
			},
			effect: {
				'en-us': "If Cacturne is your Active Pokémon and is damaged by an opponent's attack (even if Cacturne is Knocked Out), the Attacking Pokémon is now Poisoned.",
				'fr-fr': "Si Cacturne est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Cacturne est mis K.O), le Pokémon Attaquant est maintenant Empoisonné.",
				'de-de': "If Cacturne is your Active Pokémon and is damaged by an opponent's attack (even if Cacturne is Knocked Out), the Attacking Pokémon is now Poisoned."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Feint Attack",
				'fr-fr': "Feinte",
				'de-de': "Feint Attack"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies or any other effects on that Pokémon.",
				'fr-fr': "Choisissez un des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet.",
				'de-de': "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies or any other effects on that Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275779,
				tcgplayer: 84078
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275779,
				tcgplayer: 84078
			}
		},
	],

}

export default card
