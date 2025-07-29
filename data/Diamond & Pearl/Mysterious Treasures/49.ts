import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Girafarig",
		fr: "Girafarig",
		de: "Girafarig"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		203,
	],

	hp: 70,

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
				en: "Crane Neck",
				fr: "Grue",
				de: "Halsrecker"
			},
			effect: {
				en: "Search your deck for a Trainer card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte Supporter, montrez-la à votre adversaire et placez-la dans votre main. Ensuite mélangez votre deck.",
				de: "Durchsuche dein Deck nach einer Trainerkarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psybeam",
				fr: "Rafale psy",
				de: "Psystrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	description: {
		fr: "Sa queue contient un minuscule cerveau. Elle mord l'ennemi qui essaie de le frapper dans le dos."
	},

	thirdParty: {
		cardmarket: 277678
	}
}

export default card
