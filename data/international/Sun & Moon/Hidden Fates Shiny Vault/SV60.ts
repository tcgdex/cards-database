import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Espeon-GX",
		'fr-fr': "Mentali-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		196,
	],
	hp: 200,
	types: [
		"Psychic",
	],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psybeam",
				'fr-fr': "Rafale Psy",
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psychic",
				'fr-fr': "Psyko",
			},
			effect: {
				'en-us': "This attack does 30 more damage times the amount of Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
			},
			damage: 60,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Divide-GX",
				'fr-fr': "Scission-GX",
			},
			effect: {
				'en-us': "Put 10 damage counters on your opponent's Pokémon in any way you like. (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Placez 10 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
