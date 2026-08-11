import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Cubone",
		'fr-fr': "Osselait",
		'es-es': "Cubone",
		'it-it': "Cubone",
		'pt-br': "Cubone",
		'de-de': "Tragosso"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		104,
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
				"Colorless",
			],
			name: {
				'en-us': "Burdensome Bone",
				'fr-fr': "Os Pesant",
				'es-es': "Hueso Abrumador",
				'it-it': "Osso Gravoso",
				'pt-br': "Osso Penoso",
				'de-de': "Last des Knochens"
			},
			effect: {
				'en-us': "This Pokémon can’t attack during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede atacar durante tu próximo turno.",
				'it-it': "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				'pt-br': "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
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
		'en-us': "The skull it wears on its head is that of its dead mother. According to some, it will evolve when it comes to terms with the pain of her death.",
	},

	thirdParty: {
		cardmarket: 355575,
		tcgplayer: 165709
	}
}

export default card
