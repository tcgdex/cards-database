import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Seel",
		'fr-fr': "Otaria",
		'de-de': "Jurob"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		86,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Freezing Headbutt",
				'fr-fr': "Coup d'boule gelant",
				'de-de': "Frostige Kopfnuss"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+10"
		},
	],
	retreat: 2,


	description: {
		'en-us': "A Pokémon that lives on icebergs. It swims in the sea using the point on its head to break up ice.",
		'fr-fr': "Un habitant des icebergs. En mer, il utilise la corne sur sa tête pour briser la banquise."
	},

	thirdParty: {
		cardmarket: 277726,
		tcgplayer: 89053
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
