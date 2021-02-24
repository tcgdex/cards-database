import { Card } from '../../../interfaces'
import Set from '../Yellow A Alternate'

const card: Card = {
	name: {
		en: "Charmeleon",
		fr: "Reptincel",
	},
	illustrator: "nagimiso",
	rarity: "Common",
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
		en: "Charmander",
		fr: "Salamèche",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Burning Fighter",
				fr: "Combattant Brûlant",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard the top 5 cards of your deck. If any of those cards are Fire Energy cards, attach them to this Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez défausser les 5 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie Fire, attachez-les à ce Pokémon.",
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
				en: "Flamethrower",
				fr: "Lance-Flammes",
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
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



}

export default card
