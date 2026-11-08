import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [851],

	name: {
		'en-us': "Centiskorch",
		'fr-fr': "Scolocendre",
		'es-es': "Centiskorch",
		'it-it': "Centiskorch",
		'pt-br': "Centiskorch",
		'de-de': "Infernopod"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Sizzlipede",
		'fr-fr': "Grillepattes"
	},

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
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
			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Crawler",
				'fr-fr': "Mille-Pattes Brûlant",
				'es-es': "Serpenteo Candente",
				'it-it': "Arrampicalore",
				'pt-br': "Calor Rastejante",
				'de-de': "Hitzekrabbler"
			},

			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		'en-us': "When it heats up, its body temperature reaches about 1,500 degrees Fahrenheit. It lashes its body like a whip and launches itself at enemies."
	},

	thirdParty: {
		cardmarket: 499905,
		tcgplayer: 223005
	}
}

export default card
