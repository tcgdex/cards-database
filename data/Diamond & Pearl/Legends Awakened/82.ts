import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Unown ?",
		fr: "Zarbi ?",
	},
	illustrator: "Kazuaki Aihara",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "?",
				fr: "?",
			},
			effect: {
				en: "Once during your turn (before your attack), if Unown ? is on your Bench, you may choose a Pokémon in your hand and put it face down. Your opponent guesses a type of that Pokémon. Reveal that card. If your opponent guessed wrong, draw a card. Then, put that card back into your hand.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi ? se trouve sur votre Banc, vous pouvez choisir un Pokémon dans votre main et le placer face cachée. Votre adversaire doit deviner le type de ce Pokémon. Retournez la carte. Si votre adversaire s'est trompé, piochez une carte. Ensuite, replacez cette carte dans votre main.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
			},
			effect: {
				en: "Discard up to 2 cards from your hand. For each card you discarded, draw a card.",
				fr: "Défaussez jusqu'à 2 cartes de votre main. Pour chaque carte défaussée, piochez une carte.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
