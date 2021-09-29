import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Jirachi",
		fr: "Jirachi",
	},

	illustrator: "Wataru Kawahara",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		385,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Stardust Song",
				fr: "Chanson céleste",
			},
			effect: {
				en: "Once during your turn, when you put Jirachi from your hand onto your Bench, you may flip 3 coins. For each heads, search your discard pile for a Psychic Energy card and attach it to Jirachi.",
				fr: "Une seule fois pendant votre tour, lorsque vous placez Jirachi de votre main sur votre Banc, vous pouvez lancer 3 pièces. Pour chaque côté face, récupérez une carte Énergie Psychic dans votre pile de défausse et attachez-la à Jirachi.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Time Hollow",
				fr: "Creux temporel",
			},
			effect: {
				en: "Choose a number of your opponent’s Stage 1 or Stage 2 Evolved Pokémon up to the amount of Energy attached to Jirachi. Remove the highest Stage Evolution card from each of those Pokémon and put those cards back into your opponent’s hand.",
				fr: "Choisissez au maximum autant de cartes Pokémon Évolution de votre adversaire (niveau 1 ou 2) qu’il y a de cartes Énergie attachées à Jirachi. Retirez les cartes Évolution de niveau le plus élevé de ces Pokémon et remettez-les dans la main de votre adversaire.",
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

	description: {
		en: "Generations have believed that any wish written on a note on its head will come true when it awakens."
	},

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
