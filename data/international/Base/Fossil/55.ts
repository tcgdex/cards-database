import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
		'de-de': "Flegmon"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		79,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spacing Out",
				'fr-fr': "Trou d'Memoire",
				'de-de': "Dahindöser"
			},
			effect: {
				'en-us': "Flip a coin. If heads, remove a damage counter from Slowpoke. This attack can't be used if Slowpoke has no damage counters on it.",
				'fr-fr': "Lancez une pièce. Si c'est face, retirez un marqueur de dégâts de Ramoloss. Cette attaque ne peut pas être utilisée si Ramoloss n'a pas de marqueur de dégâts sur lui.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' entferne eine Schadensmarke von Flegmon. Dieser Angriff kann nicht eingesetzt werden, falls auf Flegmon keine Schadensmarken liegen."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Scavenge",
				'fr-fr': "Farfouille",
				'de-de': "Aasfresser"
			},
			effect: {
				'en-us': "Discard 1 Energy card attached to Slowpoke in order to use this attack. Put a Trainer card from your discard pile into your hand.",
				'fr-fr': "Défaussez 1 carte Énergie  attachée à Ramoloss afin de pouvoir utiliser cette attaque. Déplacez une carte Dresseur depuis votre pile de défausse vers votre main.",
				'de-de': "Entferne eine auf Flegmon abgelegte  Energiekarte, um diesen Angriff auszuführen. Nimm eine Trainerkarte aus deinem Ablagestapel auf deine Hand."
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
		'en-us': "Incredibly slow and dopey. It takes 5 seconds for it to feel pain when under attack.",
		'fr-fr': "Très lent et endormi, il lui faut 5 secondes pour ressentir la douleur d'une attaque."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273916,
				tcgplayer: 44457
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273916,
				tcgplayer: 44457
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
