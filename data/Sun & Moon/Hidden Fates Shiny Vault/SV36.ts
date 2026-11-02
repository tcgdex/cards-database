import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Diancie",
		fr: "Diancie",
		de: "Diancie"
	},
	illustrator: "Akira Komayama",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		719,
	],
	hp: 90,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Sparkling Wish",
				fr: "Espoir Étincelant",
				de: "Funkelnder Wunsch"
			},
			effect: {
				en: "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck une carte Évolution de l’un de vos Pokémon et placez-la sur ce dernier pour le faire évoluer. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 1 Karte, die sich aus 1 deiner Pokémon entwickelt, und lege sie auf jenes Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Diamond Storm",
				fr: "Orage Adamantin",
				de: "Diamantsturm"
			},
			effect: {
				en: "Heal 30 damage from each of your Fairy Pokémon.",
				fr: "Soignez 30 dégâts à chacun de vos Pokémon Fairy.",
				de: "Heile 30 Schadenspunkte bei jedem deiner {FAIRY}-Pokémon."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		en: "A sudden transformation of Carbink, its pink, glimmering body is said to be the loveliest sight in the whole world.",
		de: "Dieses Pokémon ist eine Mutation von Rocara. Sein rosafarben schimmernder Körper gilt als schönster Anblick überhaupt."
	},
}

export default card
