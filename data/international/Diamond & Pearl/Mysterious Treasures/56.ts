import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Nidorina",
		'fr-fr': "Nidorina",
		'de-de': "Nidorina"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		30,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Nidoran♀",
		'fr-fr': "Nidoran"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rescue",
				'fr-fr': "Rescousse",
				'de-de': "Bergen"
			},
			effect: {
				'en-us': "Search your discard pile for up to 2 Pokémon, show them to your opponent, and put them into your hand.",
				'fr-fr': "Choisissez dans votre pile de défausse jusqu'à 2 Pokémon, montrez-les à votre adversaire et placez-les dans votre main.",
				'de-de': "Durchsuche deinen Ablagestapel nach bis zu 2 Pokémon-Karten, zeige sie deinem Gegner und nimm sie auf die Hand."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'de-de': "Kratzer"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "When it senses danger, it raises all the barbs on its body. These barbs grow slower than NIDORINO's.",
		'fr-fr': ":Ce Pokémon dresse ses piquants en cas de danger. Ils poussent moins vite que ceux de Nidorino."
	},

	thirdParty: {
		cardmarket: 277685,
		tcgplayer: 87736
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
