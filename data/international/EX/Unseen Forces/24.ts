import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Hitmonchan",
		'fr-fr': "Tygnon",
		'de-de': "Nockchan"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		107,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Stages of Evolution",
				'fr-fr': "Niveaux d'Évolution",
				'de-de': "Stages of Evolution"
			},
			effect: {
				'en-us': "As long as Hitmonchan is an Evolved Pokémon, Hitmonchan gets +30 HP.",
				'fr-fr': "Tant que Tygnon est un Pokémon Évolué, il obtient 30 Points de vie supplémentaires.",
				'de-de': "As long as Hitmonchan is an Evolved Pokémon, Hitmonchan gets +30 HP."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Punch",
				'fr-fr': "Poing lourd",
				'de-de': "Heavy Punch"
			},
			effect: {
				'en-us': "Does 10 damage times the number of your opponent's Benched Pokémon.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de Pokémon sur le Banc de votre adversaire.",
				'de-de': "Does 10 damage times the number of your opponent's Benched Pokémon."
			},
			damage: "10x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Speedy Uppercut",
				'fr-fr': "Uppercut super rapide",
				'de-de': "Speedy Uppercut"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
				'de-de': "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86092,
				cardmarket: 276670
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 86092,
				cardmarket: 276670
			},
		}
	],
}

export default card
