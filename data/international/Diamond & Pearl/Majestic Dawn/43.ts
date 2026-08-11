import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Pachirisu",
		'fr-fr': "Pachirisu",
		'de-de': "Pachirisu"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		417,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Trans Tail",
				'fr-fr': "Trans-queue",
				'de-de': "Transferschweif"
			},
			effect: {
				'en-us': "Search your discard pile for a Lightning Energy card, show it to your opponent, and put it into your hand.",
				'fr-fr': "Cherchez dans votre pile de défausse une carte Énergie Fighting, montrez-la à votre adversaire et placez-la dans votre main.",
				'de-de': "Durchsuche deinen Ablagestapel nach 1 -Energiekarte, zeige sie deinem Gegner und nimm sie auf die Hand."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thundershock",
				'fr-fr': "Éclair",
				'de-de': "Donnerschock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It makes electricity with pouches in its cheeks and shoots charges from its tail. It lives atop trees.",
	},

	thirdParty: {
		cardmarket: 278092,
		tcgplayer: 87900
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
