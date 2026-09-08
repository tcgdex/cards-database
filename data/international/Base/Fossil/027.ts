import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Moltres",
		'fr-fr': "Sulfura",
		'de-de': "Lavados"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		146,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Wildfire",
				'fr-fr': "Feu sauvage",
				'de-de': "Lauffeuer"
			},
			effect: {
				'en-us': "You may discard any number of R Energy cards attached to Moltres when you use this attack. If you do, discard that many cards from the top of your opponent's deck.",
				'fr-fr': "Vous pouvez défausser autant de cartes Énergies  attachées à Sulfura que vous le désirez lorsque vous utilisez cette attaque. Défaussez ensuite le même nombre de cartes du sommet du deck de votre adversaire.",
				'de-de': "Du kannst beliebig viele  -Energiekarten von Lavados entfernen. wenn du diesen Angriff einsetzt. Lege danach die gleiche Anzahl der obersten Karten vom Deck deines Gegners auf deinen Ablagestapel."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],

			name: {
				'en-us': "Dive Bomb",
				'fr-fr': "Bombardement",
				'de-de': "Sturzflugbombadierung"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque n'inflige aucun dégât.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" fügt dieser Angriff keine Schadenspunkte zu."
			},

			damage: 80
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Known as the legendary bird of fire. Every flap of its wings creates a dazzling flash of flames.",
		'fr-fr': "L'oiseau légendaire du feu. Une pluie de flammes surgit à chaque battement de ses ailes."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273873,
				tcgplayer: 106529
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273873,
				tcgplayer: 106529
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
