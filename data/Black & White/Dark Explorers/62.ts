import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Ténéfix",
		es: "Sableye",
		it: "Sableye",
		pt: "Sableye",
		de: "Zobiris"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		302,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde Folie",
				de: "Konfustrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Junk Hunt",
				fr: "Marché aux Puces",
				de: "Müllsammler"
			},
			effect: {
				en: "Put 2 Item cards from your discard pile into your hand.",
				fr: "Ajoutez 2 cartes Objet de votre pile de défausse à votre main.",
				de: "Nimm 2 Itemkarten von deinem Ablagestapel auf deine Hand."
			},

		},
	],

	retreat: 1,

	description: {
		en: "It hides in the darkness of caves. Its diet of gems has transformed its eyes into gemstones.",
		de: "Es versteckt sich im Dunkeln von Höhlen. Seine Augen sind Edelsteine."
	},

	thirdParty: {
		cardmarket: 280390,
		tcgplayer: 88855
	}
}

export default card
