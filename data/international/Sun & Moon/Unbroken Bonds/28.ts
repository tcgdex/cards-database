import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Torracat",
		'fr-fr': "Matoufeu",
		'es-es': "Torracat",
		'it-it': "Torracat",
		'pt-br': "Torracat",
		'de-de': "Miezunder"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		726,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Litten",
		'fr-fr': "Flamiaou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
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
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It can act spoiled if it grows close to its Trainer. A powerful Pokémon, its sharp claws can leave its Trainer's whole body covered in scratches.",
	},

	thirdParty: {
		cardmarket: 372320,
		tcgplayer: 189075
	}
}

export default card
