import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Oddish",
		fr: "Mystherbe",
		it: "Oddish",
		de: "Myrapla"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		43,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Stun Spore",
				fr: "Para-spore",
				it: "Spore Paralizzanti",
				de: "Stachelspore"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Sprout",
				fr: "Repousse",
				it: "Germoglio",
				de: "Sprössling"
			},
			effect: {
				en: "Search your deck for a Basic Pokémon named Oddish and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
				fr: "Cherchez dans votre deck un Pokémon de base appelé Mystherbe et placez-le sur votre Banc. Mélangez ensuite votre deck. (Vous ne pouvez pas utiliser cette attaque si votre Banc est plein.)",
				it: "Cerca nel tuo mazzo un Pokémon Base chiamato Oddish e mettilo nella tua Panchina. Poi rimischia il tuo mazzo (se la tua Panchina è già completa, non usare questo attacco).",
				de: "Suche in deinem Deck nach einer Basis-Pokémon-Karte mit dem Namen Myrapla und lege sie auf deine Bank. Mische dein Deck danach. (du kannst diesen Angriff nicht einsetzen, wenn deine Bank voll ist.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds.",
		fr: "Pendant la journée il se cache sous terre. Il s'aventure la nuit pour planter des graines.",
		it: "Durante il giorno tiene la faccia sottoterra. Di notte invece va in giro a spargere i propri semi.",
		de: "Tagsüber hält es sein Gesicht im Sand vergraben. Nachts wandert es durch die Gegend und verstreut seinen Samen."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273855,
				tcgplayer: 45161
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273855,
				tcgplayer: 45161
			}
		}
	],
}

export default card
