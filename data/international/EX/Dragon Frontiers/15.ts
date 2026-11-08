import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Dewgong δ",
		'fr-fr': "Lamantine δ",
		'de-de': "Jugong"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		87,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Seel",
		'fr-fr': "Otaria"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Delta Protection",
				'fr-fr': "Protection Delta",
				'de-de': "Delta-Schutz"
			},
			effect: {
				'en-us': "Any damage done to Dewgong by attacks from your opponent's Pokémon that has δ on its card is reduced by 40 (after applying Weakness and Resistance).",
				'fr-fr': "Tous dégâts infligés à Lamantine par des attaques de Pokémon de votre adversaire possédant le symbole δ sont réduits de 40 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Jeder Schaden, der Jugong durch Angriffe von gegnerischen Pokémon, auf denen δ zu sehen ist, zugefügt wird, wird um 40 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ice Beam",
				'fr-fr': "Laser glace",
				'de-de': "Eisstrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Surge",
				'fr-fr': "Déferlante",
				'de-de': "Woge"
			},
			effect: {
				'en-us': "If Dewgong has at least 2 Water Energy attached to it, this attack does 40 damage plus 20 more damage.",
				'fr-fr': "Si Lamantine possède au moins 2 Énergies , cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Falls mindestens 2 -Energie an Jugong angelegt sind, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277220
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
