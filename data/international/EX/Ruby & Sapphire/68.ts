import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'de-de': "Trasla"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [280],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras'face",
				'de-de': "Pound"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Link Blast",
				'fr-fr': "Explosion en série",
				'de-de': "Link Blast"
			},
			effect: {
				'en-us': "If Ralts and the Defending Pokémon have a different amount of Energy attached to them, this attack's base damage is 10 instead of 40.",
				'fr-fr': "Si Tarsal et le Pokémon Défenseur ont un total d'Énergie différent, les dégâts de base de cette attaque sont de 10 et non de 40.",
				'de-de': "If Ralts and the Defending Pokémon have a different amount of Energy attached to them, this attack's base damage is 10 instead of 40."
			},
			damage: 40,

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
				cardmarket: 275716,
				tcgplayer: 88556
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275716,
				tcgplayer: 88556
			}
		},
	],

}

export default card
