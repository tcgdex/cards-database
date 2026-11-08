import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Hariyama",
		'fr-fr': "Hariyama",
		'de-de': "Hariyama"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		297,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Makuhita",
		'fr-fr': "Makuhita",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Palm Strike",
				'fr-fr': "Cou d'paume",
				'de-de': "Handkantenschlag"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 40 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 40 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Spirited Throw",
				'fr-fr': "Lancer plein d'esprit",
				'de-de': "Energischer Wurf"
			},
			effect: {
				'en-us': "If Hariyama has fewer remaining HP than the Defending Pokémon, this attack's base damage is 80.",
				'fr-fr': "Si Hariyama possède moins de PV que le Pokémon Défenseur, les dégâts de base de cette attaque sont de 80.",
				'de-de': "Wenn Hariyama weniger verbliebene KP hat als das Verteidigende Pokémon, beträgt der Grundschaden dieses Angriffs 80 Schadenspunkte."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It loves to match power with big-bodied Pokémon. It can knock a truck flying with its arm thrusts.",
	},

	thirdParty: {
		cardmarket: 277943,
		tcgplayer: 86014
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
