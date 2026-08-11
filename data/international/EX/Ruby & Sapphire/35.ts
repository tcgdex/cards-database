import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
		'de-de': "Kirlia"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [281],

	hp: 70,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dazzle Dance",
				'fr-fr': "Danse éblouissante",
				'de-de': "Verwirrender Tanz"
			},
			effect: {
				'en-us': "Flip a coin. If heads, each Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, chaque Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' sind alle Verteidigenden Pokémon jetzt verwirrt."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Life Drain",
				'fr-fr': "Perte d'énergie",
				'de-de': "Lebensentzug"
			},
			effect: {
				'en-us': "Flip a coin. If heads, put damage counters on the Defending Pokémon until it is 10 HP away from being Knocked Out.",
				'fr-fr': "Lancez une pièce. Si c'est face, placez des marqueurs de dégât sur le Pokémon Défenseur jusqu'à ce qu'il ne lui reste plus que 10 PV.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' legst du so viele Schadensmarken auf das Verteidigende Pokémon, dass es nur noch 10 Schadenspunkte davon entfernt ist, kampfunfähig zu werden."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275683,
				tcgplayer: 86460
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275683,
				tcgplayer: 86460
			}
		},
	],

}

export default card
