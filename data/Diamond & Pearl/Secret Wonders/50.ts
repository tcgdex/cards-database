import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Flaaffy",
		fr: "Lainergie",
		de: "Waaty"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		180,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Mareep",
		fr: "Wattouat",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Attract Current",
				fr: "Courant électrique",
				de: "Stromanziehung"
			},
			effect: {
				en: "Search your deck for a Lightning Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Énergie Lightning et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach einer -Energiekarte und lege sie 1 deiner Pokémon an. Mische dein Deck danach."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electromagnetic Kick",
				fr: "Coup électromagnétique",
				de: "Elektromagnetischer Kick"
			},
			effect: {
				en: "Flip a coin. If tails, Flaaffy does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Lainergie s'inflige 10 dégâts.",
				de: "Wirf 1 Münze. Bei \"Zahl\" fügt sich Waaty selbst 10 Schadenspunkte zu."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
