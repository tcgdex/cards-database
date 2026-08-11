import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Heatmor",
		'fr-fr': "Aflamanoir",
		'es-es': "Heatmor",
		'it-it': "Heatmor",
		'pt-br': "Heatmor",
		'de-de': "Furnifraß"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		631,
	],

	hp: 110,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Searing Flame",
				'fr-fr': "Flammes Calcinantes",
				'es-es': "Llama Abrasadora",
				'it-it': "Fiamme Ustionanti",
				'pt-br': "Chama Cauterizante",
				'de-de': "Sengende Flammen"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Fire Claws",
				'fr-fr': "Griffes Enflammées",
				'es-es': "Garras de Fuego",
				'it-it': "Artigli Infuocati",
				'pt-br': "Garras de Fogo",
				'de-de': "Feuerkrallen"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "There's a hole in its tail that allows it to draw in the air it needs to keep its fire burning. If the hole gets blocked, this Pokémon will fall ill."
	},

	thirdParty: {
		cardmarket: 436294,
		tcgplayer: 208304
	}
}

export default card
