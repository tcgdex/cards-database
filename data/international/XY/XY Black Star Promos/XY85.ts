import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Hoopa EX",
		'fr-fr': "Hoopa EX",
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		720,
	],

	hp: 140,

	types: [
		"Psychic",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hyperspace Ring",
				'fr-fr': "Anneau Hyperespace",
			},
			effect: {
				'en-us': "Search your deck for up to 2 Item cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez jusqu'à 2 cartes Objet dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Wonder Trick",
				'fr-fr': "Astuce Merveilleuse"
			},
			effect: {
				'en-us': "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 553491
	}
}

export default card
