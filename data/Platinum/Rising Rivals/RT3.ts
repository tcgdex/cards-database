import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Heat Rotom",
		fr: "Motisma Chaleur Niv. 46",
		de: "Hitze-Rotom"
	},
	illustrator: "Lee HyunJung",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		479,
	],
	hp: 80,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Heat Shift",
				fr: "Mutation chaleur",
				de: "Hitze-Wechsel"
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this power. Heat Rotom's type is Fire until the end of your turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Motisma Chaleur est de type Fire jusqu'à la fin de votre tour.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du diese Poké-Power benutzen. HItze-Rotoms Typ ist  bis zum Ende des Zuges."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Warm Up",
				fr: "Échauffement",
				de: "Aufwärmen"
			},
			effect: {
				en: "Search your deck for a Fire Energy card and attach it to 1 of your Benched Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Énergie Fire et attachez-la à 1 des Pokémon de votre Banc. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach 1 -Energiekarte und lege sie an 1 Pokémon auf deiner Bank an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Burn",
				fr: "Chaleur brûlante",
				de: "Brandwunde"
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
