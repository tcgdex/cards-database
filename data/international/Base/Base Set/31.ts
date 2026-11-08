import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Jynx",
		'fr-fr': "Lippoutou",
		'de-de': "Rossana",
		'it-it': "Jynx"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		124,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Doubleslap",
				'fr-fr': "Torgnoles",
				'de-de': "Duplexhieb",
				'it-it': "Doppiasberla"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt jedesmal, wenn die Münze Kopf zeigt, 10 Schadenspunkte zu.",
				'it-it': "Lancia 2 volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa."
			},
			damage: "10x",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Meditate",
				'fr-fr': "Yoga",
				'de-de': "Meditation",
				'it-it': "Meditazione"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Défenseur.",
				'de-de': "Fügt 20 Schadenspunkte plus 10 weitere für jede auf dem verteidigenden Pokémon abgelegte Schadensmarke zu.",
				'it-it': "Infligge 20 danni più altri 10 danni per ogni segnalino danno sul Pokémon Difensore."

			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Merely by meditating, the Pokémon launches a powerful psychic energy attack.",
		'fr-fr': "Il lui suffit de méditer pour lancer une puissante attaque psychique.",
		'it-it': "Con la sola forza del pensiero, Questo Pokémon lancia un potente attacco di energia psichica. LIV 23 N.124"
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273726,
				tcgplayer: 42373
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107028
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107028
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
