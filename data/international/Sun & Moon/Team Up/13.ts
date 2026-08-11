import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'es-es': "Charmeleon",
		'it-it': "Charmeleon",
		'pt-br': "Charmeleon",
		'de-de': "Glutexo"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		5,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Fire Fang",
				'fr-fr': "Crocs Feu",
				'es-es': "Colmillo Ígneo",
				'it-it': "Rogodenti",
				'pt-br': "Presas de Fogo",
				'de-de': "Feuerzahn"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It lashes about with its tail to knock down its foe. It then tears up the fallen opponent with sharp claws.",
	},

	thirdParty: {
		cardmarket: 368946,
		tcgplayer: 183784
	}
}

export default card
