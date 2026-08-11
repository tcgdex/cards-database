import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Raticate",
		'fr-fr': "Rattatac",
		'es-es': "Raticate",
		'it-it': "Raticate",
		'pt-br': "Raticate",
		'de-de': "Rattikarl"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Rattata",
		'fr-fr': "Rattata",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gnaw Through",
				'fr-fr': "Grignotage",
			},
			effect: {
				'en-us': "Discard a Pokémon Tool card attached to the Defending Pokémon.",
				'fr-fr': "Défaussez une carte Outil Pokémon attachée au Pokémon Défenseur.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Super Fang",
				'fr-fr': "Croc Fatal",
			},
			effect: {
				'en-us': "Put damage counters on the Defending Pokémon until its remaining HP is 10.",
				'fr-fr': "Placez des marqueurs de dégâts sur le Pokémon Défenseur jusqu'à ce qu'il ait 10 PV.",
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "With its long fangs, this surprisingly violent Pokémon can gnaw away even thick concrete with ease.",
	},

	thirdParty: {
		cardmarket: 280692,
		tcgplayer: 88607
	}
}

export default card
