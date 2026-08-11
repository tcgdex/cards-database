import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Ferroseed",
		'fr-fr': "Grindur",
		'es-es': "Ferroseed",
		'it-it': "Ferroseed",
		'pt-br': "Ferroseed",
		'de-de': "Kastadur"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'es-es': "Rodar",
				'it-it': "Rotolamento",
				'pt-br': "Rolagem",
				'de-de': "Walzer"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "It defends itself by launching spikes, but its aim isn't very good at first. Only after a lot of practice will it improve."
	},

	dexId: [597],

	thirdParty: {
		cardmarket: 436759,
		tcgplayer: 208441
	}
}

export default card
