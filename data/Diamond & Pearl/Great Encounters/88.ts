import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Togepi",
		fr: "Togepi",
		de: "Togepi"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		175,
	],

	hp: 50,

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
				en: "Yawn",
				fr: "Baillement",
				de: "Gähnen"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Find a friend",
				fr: "Trouver un ami",
				de: "Freunde finden"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, choisissez un Pokémon dans votre deck, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
				de: "Wirf 1 Münze. Bei \"Kopf\" durchsuche dein Deck nach einer Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277990
	}
}

export default card
