import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
	},
	illustrator: "nagimiso",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		5,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Burning Fighter",
				'fr-fr': "Combattant Brûlant",
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard the top 5 cards of your deck. If any of those cards are Fire Energy cards, attach them to this Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez défausser les 5 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie Fire, attachez-les à ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-Flammes",
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		'en-us': "When it swings its burning tail, it elevates the air temperature to unbearably high levels.",
	},
}

export default card
