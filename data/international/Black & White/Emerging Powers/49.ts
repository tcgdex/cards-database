import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Roggenrola",
		'fr-fr': "Nodulithe",
		'es-es': "Roggenrola",
		'it-it': "Roggenrola",
		'pt-br': "Roggenrola",
		'de-de': "Kiesling"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		524,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Harden",
				'fr-fr': "Armure",
			},
			effect: {
				'en-us': "During your opponent's next turn, if this Pokémon would be damaged by an attack, prevent that attack's damage done to this Pokémon if that damage is 40 or less.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon doit subir les dégâts d'une attaque, évitez les dégâts infligés à ce Pokémon si ces dégâts sont de 40 ou moins.",
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'Boule",
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its ear is hexagonal in shape. Compressed underground, its body is as hard as steel.",
	},

	thirdParty: {
		cardmarket: 280014,
		tcgplayer: 88805
	}
}

export default card
