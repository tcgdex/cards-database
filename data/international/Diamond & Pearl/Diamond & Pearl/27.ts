import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Gengar",
		'fr-fr': "Ectoplasma",
		'de-de': "Gengar"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Life Drain",
				'fr-fr': "Perte d'énergie",
				'de-de': "Lebensentzug"
			},
			effect: {
				'en-us': "Flip a coin. If heads, put damage counters on the Defending Pokémon until it is 10 HP away from being Knocked Out.",
				'fr-fr': "Lancez une pièce. Si c'est face, placez des marqueurs de dégât sur le Pokémon Défenseur jusqu'à ce qu'il ne soit plus qu'à 10 PV d'être mis K.O.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' lege so viele Schadensmarken auf das Verteidigende Pokémon, dass es nur noch 10 Schadenspunkte davon entfernt ist, kampfunfähig zu sein."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Shadow Dance",
				'fr-fr': "Danse d'ombre",
				'de-de': "Schattentanz"
			},
			effect: {
				'en-us': "Put 4 damage counters on your opponent's Pokémon in any way you like. Then, switch Gengar with 1 of your Benched Pokémon.",
				'fr-fr': "Placez 4 marqueurs de dégât sur les Pokémon de votre adversaire de la façon que vous voulez. Ensuite, échangez Ectoplasma avec 1 de vos Pokémon de Banc.",
				'de-de': "Lege 4 Schadensmarken in beliebiger Verteilung auf die gegnerischen Pokémon. Tausche danach Gengar gegen 1 Pokémon auf deiner Bank aus."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It hides in shadows. It is said that if Gengar is hiding, it cools that area by nearly 10 degrees F.",
		'fr-fr': "On dit que lorsqu'Ectoplasma se cache dans l'ombre, la température alentour chute de 5°C."
	},

	thirdParty: {
		cardmarket: 277526,
		tcgplayer: 85675
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
