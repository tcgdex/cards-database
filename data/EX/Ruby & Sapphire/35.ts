import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Kirlia",
		fr: "Kirlia",
		de: "Kirlia"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		281,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Ralts",
		fr: "Tarsal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dazzle Dance",
				fr: "Danse éblouissante",
				de: "Verwirrender Tanz"
			},
			effect: {
				en: "Flip a coin. If heads, each Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, chaque Pokémon Défenseur est maintenant Confus.",
				de: "Wirf eine Münze. Bei 'Kopf' sind alle Verteidigenden Pokémon jetzt verwirrt."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Life Drain",
				fr: "Perte d'énergie",
				de: "Lebensentzug"
			},
			effect: {
				en: "Flip a coin. If heads, put damage counters on the Defending Pokémon until it is 10 HP away from being Knocked Out.",
				fr: "Lancez une pièce. Si c'est face, placez des marqueurs de dégât sur le Pokémon Défenseur jusqu'à ce qu'il ne lui reste plus que 10 PV.",
				de: "Wirf eine Münze. Bei 'Kopf' legst du so viele Schadensmarken auf das Verteidigende Pokémon, dass es nur noch 10 Schadenspunkte davon entfernt ist, kampfunfähig zu werden."
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

	thirdParty: {
		cardmarket: 275682,
		tcgplayer: 86460
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
