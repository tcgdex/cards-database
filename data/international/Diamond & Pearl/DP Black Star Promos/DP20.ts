import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Magmortar",
		'fr-fr': "Maganon",
		'de-de': "Magbrant"
	},

	illustrator: "Hiroaki Ito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		467,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Magmar",
		'fr-fr': "Magmar"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Smoke Bomb",
				'fr-fr': "Bombe fumante",
				'de-de': "Rauchbombe"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin.  If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flame Drum",
				'fr-fr': "Feu roulant",
				'de-de': "Flammentrommel"
			},
			effect: {
				'en-us': "If Magby isn't anywhere under Magmortar, discard 2 Energy cards from your hand. (If you can't discard 2 Energy cards from your hand, this attack does nothing.)",
				'fr-fr': "Si Magby ne se trouve pas sous Maganon, défaussez 2 cartes Énergies de votre main. (Si vous ne pouvez pas défausser 2 cartes Énergie de votre main, cette est sans effet.)",
				'de-de': "Wenn Magby sich an keiner Stelle unter Magbrant befindet, lege 2 Karten von deiner Hand auf deinen Ablagestapel. (Wenn du keine 2 Karten von deiner Hand auf den Ablagestapel legen kannst, hat dieser Angriff keine Auswirkungen.)"
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],
	retreat: 3,


	description: {
		'fr-fr': "Il projette des boules de feu de 2000°C à bout de bras. Il vit dans les cratères volcaniques.",
		'en-us': "It blasts fireballs of over 3,600 degrees F from the ends of its arms. it lives in volcanic craters"
	},

	variants: [
		{
			type: "holo",
		}
	],

	thirdParty: {
		cardmarket: 275562,
		tcgplayer: 87057
	}
}

export default card
