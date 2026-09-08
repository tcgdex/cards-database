import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv",
		'de-de': "Sleima"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Nasty Goo",
				'fr-fr': "Mauvaise mélasse",
				'de-de': "Übler Dreck"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Minimize",
				'fr-fr': "Lilliput",
				'de-de': "Komprimator"
			},
			effect: {
				'en-us': "All damage done by attacks to Grimer during your opponent's next turn is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Tous les dégâts infligés à Tadmorv par des attaques durant le prochain tour de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance.)",
				'de-de': "Aller Schaden, der Sleima während des nächsten Zuges durch Angriffe deines gegners zugefügt wird, wird um 20 Schadenspunkte reduziert. (nachdem Schwäche und resistenz abgerechnet wurden)."
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


	description: {
		'en-us': "Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories.",
		'fr-fr': "Vivant dans les tas d'ordures, il se nourrit des déchets polluants rejetés par les usines."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273909,
				tcgplayer: 44450
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273909,
				tcgplayer: 44450
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
