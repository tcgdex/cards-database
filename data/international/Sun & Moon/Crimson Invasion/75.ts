import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Jangmo-o",
		'fr-fr': "Bébécaille",
		'es-es': "Jangmo-o",
		'it-it': "Jangmo-o",
		'pt-br': "Jangmo-o",
		'de-de': "Miniras"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		782,
	],

	hp: 60,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d’Boule",
				'es-es': "Golpe Cabeza",
				'it-it': "Bottintesta",
				'pt-br': "Cabeçada",
				'de-de': "Kopfnuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Lightning",
			],
			name: {
				'en-us': "Gentle Slap",
				'fr-fr': "Gifle Douce",
				'es-es': "Bofetada Gentil",
				'it-it': "Schiaffetto",
				'pt-br': "Tapinha",
				'de-de': "Sanfter Hieb"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It expresses its feelings by smacking its scales. Metallic sounds echo through the tall mountains where Jangmo-o lives.",
	},

	thirdParty: {
		cardmarket: 311922,
		tcgplayer: 149101
	}
}

export default card
