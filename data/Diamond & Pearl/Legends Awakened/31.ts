import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Jirachi",
		fr: "Jirachi",
		de: "Jirachi"
	},

	illustrator: "Satoshi Ohta",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		385,
	],

	hp: 70,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "One Desire",
				fr: "Un souhait",
				de: "Einziger Wunsch"
			},
			effect: {
				en: "Search your deck for any 1 card. Shuffle your deck, then put that card on top of your deck.",
				fr: "Choisissez n'importe quelle carte dans votre deck. Mélangez votre deck puis placez cette carte au dessus de votre deck.",
				de: "Durchsuche dein Deck nach 1 Karte und lege sie, nachdem du dein Deck gemischt hast, oben auf dein Deck."
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				en: "Doom Desire",
				fr: "Carnareket",
				de: "Kismetwunsch"
			},
			effect: {
				en: "Discard all Energy attached to Jirachi. The Defending Pokémon is Knocked Out at the end of your opponent's next turn.",
				fr: "Défaussez toutes les Énergies attachées à Jirachi. Le Pokémon Défenseur est mis K.O à la fin du prochain tour de votre adversaire.",
				de: "Lege alle an Jirachi angelegten Energien auf deinen Ablagestapel. Das Verteidigende Pokémon wird am Ende des nächsten Zuges deines Gegners kampfunfähig."
			},

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "On raconte qu'une fois tous les mille ans, il a la capacité d'exaucer tous les vœux durant une semaine."
	},

	thirdParty: {
		cardmarket: 278180
	}
}

export default card
