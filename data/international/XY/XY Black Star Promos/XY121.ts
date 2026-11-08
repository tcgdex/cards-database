import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Charizard EX",
		'fr-fr': "Dracaufeu EX",
	},

	illustrator: "Kouki Saitou",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 180,

	types: [
		"Fire",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Stoke",
				'fr-fr': "Attisement",
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for up to 3 basic Energy cards and attach them to this Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, cherchez jusqu'à 3 cartes Énergie de base dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 289561,
		tcgplayer: 117267
	}
}

export default card
