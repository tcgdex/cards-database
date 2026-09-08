import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Cloyster",
		'fr-fr': "Crustabri",
		'de-de': "Austos"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		91,
	],

	hp: 50,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Shellder",
		'fr-fr': "Kokiyas"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],

			name: {
				'en-us': "Clamp",
				'fr-fr': "Claquoir",
				'de-de': "Schnapper"
			},

			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, this attack does nothing (not even damage).",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, cette attaque n'a aucun effet (pas même les dégâts).",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt. Bei 'Zahl' hat dieser Angriff keine Auswirkungen (und fügt auch keine Schadenspunkte zu)."
			},

			damage: 30
		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Spike Cannon",
				'fr-fr': "Picanon",
				'de-de': "Dornkanone"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf zwei Münzen. Dieser Angriff fügt jedesmal wenn die Münze 'Kopf' zeigt 30 Schadenspunkte zu."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "When attacked, it launches its horns in quick volleys. Its innards have never been seen.",
		'fr-fr': "Lorsqu'il est attraqué, il projette ses cornes en rapides volées. Personne n'a jamais vu ses entrailles."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273893,
				tcgplayer: 44434
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273893,
				tcgplayer: 44434
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
