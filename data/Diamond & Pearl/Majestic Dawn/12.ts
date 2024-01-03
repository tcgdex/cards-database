import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Phione",
		fr: "Phione",
		de: "Phione"
	},
	illustrator: "Daisuke Ito",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		489,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Evolution Wish",
				fr: "Souhait évolution",
				de: "Evolutionswunsch"
			},
			effect: {
				en: "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte qui évolue d'1 de vos Pokémon et placez-la sur ce Pokémon. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach 1 Karte, die sich aus 1 deiner Pokémon entwickelt, und lege sie auf dieses Pokémon. (Dies zählt als Entwickeln dieses Pokémon.) Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Water Pulse",
				fr: "Vibraqua",
				de: "Aquawelle"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
