import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Latios",
		fr: "Latios"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		381,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Draw",
				fr: "Absorption d'énergie"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a basic Energy card and attach it to Latios. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, choisissez dans votre deck une carte Énergie de base et attachez-la à Latios. Ensuite, mélangez votre deck."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Luster Purge",
				fr: "Lumi-Eclat"
			},
			effect: {
				en: "Discard 3 Energy attached to Latios.",
				fr: "Défaussez 3 Énergies attachée à Latios."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		en: "A highly intelligent Pokémon. By folding back its wings in flight, it can overtake jet planes.",
		fr: "Un Pokémon très intelligent. Il peut voler plus vite qu'un avion à réaction en repliant ses ailes."
	},

	retreat: 2,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278036
	}
}

export default card
