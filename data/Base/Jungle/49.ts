import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Bellsprout",
		fr: "Chétiflor",
		de: "Knofensa",
		it: "Bellsprout"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		69,
	],

	hp: 40,

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
				en: "Vine Whip",
				fr: "Fouet liane",
				de: "Rankenhieb",
				it: "Frustata"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille",
				de: "Familienruf",
				it: "Cerca Famiglia"
			},
			effect: {
				en: "Search your deck for a Basic Pokémon named Bellsprout and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
				fr: "Cherchez dans votre deck un Pokémon de base appelé Chétiflor et placez-le sur votre Banc. Mélangez ensuite votre deck. (Vous ne pouvez pas utiliser cette attaque si votre Banc est plein.)",
				de: "Suche in deinem Deck nach einer Basis-Pokémon-Karte mit dem namen Knofensa und lege sie auf deine Bank. Mische dein Deck danach. (Du kannst diesen Angriff nicht einsetzen, wenn deine bank voll ist.)",
				it: "Cerca nel tuo mazzo un Pokémon base chiamato Bellsprout e mettilo nella tua Panchina. Poi rimischia le carte del tuo mazzo (se la tua Panchina è già completa, non puoi usare questo attacco)."
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
		en: "A carnivorous Pokémon that traps and eats bugs. It uses its root feet to soak up needed moisture.",
		fr: "Un Pokémon carnivore qui se nourrit de petits insectes. Ses racines servent d'attaches.",
		it: "Pokémon carnivoro che cattura e divora gli insetti. Usa le sue radici per assorbire dal terreno i liquidi di cui ha bisogno."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273846,
				tcgplayer: 45152
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273846,
				tcgplayer: 45152
			}
		}
	],
}

export default card
