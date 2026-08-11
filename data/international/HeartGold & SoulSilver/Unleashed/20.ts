import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Ninetales",
		'fr-fr': "Feunard",
		'de-de': "Vulnona"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [38],

	hp: 90,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Heat Acceleration",
				'fr-fr': "Accélération ardente",
				'de-de': "Hitze marsch!"
			},
			effect: {
				'en-us': "Search your discard pile for up to 3 Fire Energy cards and attach them to 1 of your Pokémon.",
				'fr-fr': "Cherchez dans votre pile de défausse jusqu’à 3 cartes Énergie Fire et attachez-les à l’un de vos Pokémon.",
				'de-de': "Durchsuche deinen Ablagestapel nach bis zu 3 -Energiekarten und lege sie an 1 deiner Pokémon an."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Searing Flame",
				'fr-fr': "Flammes calcinantes",
				'de-de': "Sengende Flammen"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Some legends claim that each of its nine tails has its own unique type of special mystical power."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87776,
				cardmarket: 279176
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87776,
				cardmarket: 279176
			}
		},
	],

}

export default card
