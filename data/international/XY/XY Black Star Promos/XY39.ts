import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Kingdra",
		'fr-fr': "Hyporoi",
	},

	illustrator: "hatachu",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		230,
	],

	hp: 130,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Seadra",
		'fr-fr': "Hypocéan",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				'fr-fr': "Croissance α",
			},
			effect: {
				'fr-fr': "Lorsque vous attachez une carte Énergie de votre main à ce Pokémon (excepté à la suite d'une attaque, d'un talent ou d'une carte Dresseur), vous pouvez attacher 2 cartes Énergie au lieu d'une.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gather Strength",
				'fr-fr': "Pouvoir Collecté",
			},
			effect: {
				'en-us': "Search your deck for up to 4 basic Energy cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez jusqu'à 4 cartes Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Lightning",
			],
			name: {
				'en-us': "Dragon Blast",
				'fr-fr': "Explo-Draco",
			},
			effect: {
				'en-us': "Discard a Water Energy and a Lightning Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie Water et une Énergie Lightning attachées à ce Pokémon.",
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It stores energy by sleeping at underwater depths at which no other life-forms can survive.",
	},

	thirdParty: {
		cardmarket: 289702
	}
}

export default card
