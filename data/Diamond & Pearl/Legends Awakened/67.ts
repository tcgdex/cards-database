import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Ninjask",
		fr: "Ninjask",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		291,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Cast-off Shell",
				fr: "Coquille libérante",
			},
			effect: {
				en: "Once during your turn, when you play Ninjask from your hand to evolve 1 of your Pokémon and if your Bench isn't full, you may put Shedinja onto your Bench as a Basic Pokémon from your hand or your discard pile.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Ninjask de votre main pour faire évoluer 1 de vos Pokémon et si votre Banc n'est pas plein, vous pouvez placer Munja sur votre Banc comme Pokémon de base de votre main ou votre pile de défausse.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Chip Off",
				fr: "Grignoter",
			},
			effect: {
				en: "If your opponent has 6 or more cards in his or her hand, discard a number of cards without looking until your opponent has 5 cards left in his or her hand.",
				fr: "Si votre adversaire possède au moins 6 cartes en main, défaussez des cartes sans regarder jusqu'à ce qu'il ne lui reste plus que 5 cartes en main.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],




}

export default card
