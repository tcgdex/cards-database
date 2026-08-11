import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Popplio",
		'fr-fr': "Otaquin",
		'es-es': "Popplio",
		'it-it': "Popplio",
		'pt-br': "Popplio",
		'de-de': "Robball"
	},

	illustrator: "match",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		728,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Sing",
				'fr-fr': "Berceuse",
				'es-es': "Canto",
				'it-it': "Canto",
				'pt-br': "Canção",
				'de-de': "Gesang"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon snorts body fluids from its nose, blowing balloons to smash into its foes. It's famous for being a hard worker.",
	},
}

export default card
