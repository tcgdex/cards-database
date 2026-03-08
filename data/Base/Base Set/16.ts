import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Zapdos",
		fr: "Électhor",
		de: "Zapdos",
		it: "Zapdos"
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
				en: "Thunder",
				fr: "Tonnerre",
				de: "Donner",
				it: "Tuono"
			},
			effect: {
				en: "Flip a coin. If tails, Zapdos does 30 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Électhor s'inflige 30 dégâts.",
				de: "Wirf eine Münze. Bei Zahl fügt sich Zapdos selbst 30 Schadenspunkte zu.",
				it: "Lancia una moneta. Se esce croce, Zapdos si infligge 30 danni.",
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
				en: "Thunderbolt",
				fr: "Fatal-Foudre",
				de: "Donnerblitz",
				it: "Fulmine"
			},
			effect: {
				en: "Discard all Energy cards attached to Zapdos in order to use this attack.",
				fr: "Défaussez toutes les cartes Énergie attachées à Électhor pour pouvoir utiliser cette attaque.",
				de: "Entferne alle auf Zapdos abgelegten Energiekarten, um diesen Angriff auszuführen.",
				it: "Scarta tutte le carte Energia assegnate a Zapdos per poter usare questo attacco.",
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

	description: {
		fr: "L'oiseau légendaire de la foudre. Il surgit hors des nuages en lançant d'énormes éclairs.",
		it: "Leggendario uccello Pokémon. Si dice che appaia dalle nuvole brandendo enormi fulmini. LIV 64 N.145"
	},

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "holo",
			subtype: "shadowless",
		},
		{
			type: "holo",
			subtype: "1999-2000-copyright",
		}
	],


	thirdParty: {
		cardmarket: 273711,
		tcgplayer: 42356
	}
}

export default card
