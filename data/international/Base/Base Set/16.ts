import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Zapdos",
		'fr-fr': "Électhor",
		'de-de': "Zapdos",
		'it-it': "Zapdos"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		145,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder",
				'fr-fr': "Tonnerre",
				'de-de': "Donner",
				'it-it': "Tuono"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Zapdos does 30 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Électhor s'inflige 30 dégâts.",
				'de-de': "Wirf eine Münze. Bei Zahl fügt sich Zapdos selbst 30 Schadenspunkte zu.",
				'it-it': "Lancia una moneta. Se esce croce, Zapdos si infligge 30 danni.",
			},
			damage: 60,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Thunderbolt",
				'fr-fr': "Fatal-Foudre",
				'de-de': "Donnerblitz",
				'it-it': "Fulmine"
			},
			effect: {
				'en-us': "Discard all Energy cards attached to Zapdos in order to use this attack.",
				'fr-fr': "Défaussez toutes les cartes Énergie attachées à Électhor pour pouvoir utiliser cette attaque.",
				'de-de': "Entferne alle auf Zapdos abgelegten Energiekarten, um diesen Angriff auszuführen.",
				'it-it': "Scarta tutte le carte Energia assegnate a Zapdos per poter usare questo attacco.",
			},
			damage: 100,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 3,


	description: {
		'en-us': "A legendary bird Pokémon said to appear from clouds while wielding enormous lightning bolts.",
		'fr-fr': "L'oiseau légendaire de la foudre. Il surgit hors des nuages en lançant d'énormes éclairs.",
		'it-it': "Leggendario uccello Pokémon. Si dice che appaia dalle nuvole brandendo enormi fulmini. LIV 64 N.145"
	},

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273711,
				tcgplayer: 42356
			}
		},
		{
			type: "holo",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107011
			}
		},
		{
			type: "holo",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107011
			}
		},
		{
			type: "holo",
			subtype: "1999-2000-copyright",
		}
	]
}

export default card
