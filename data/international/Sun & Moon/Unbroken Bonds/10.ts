import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Venonat",
		'fr-fr': "Mimitoss",
		'es-es': "Venonat",
		'it-it': "Venonat",
		'pt-br': "Venonat",
		'de-de': "Bluzuk"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		48,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Psybeam",
				'fr-fr': "Rafale Psy",
				'es-es': "Psicorrayo",
				'it-it': "Psicoraggio",
				'pt-br': "Feixe Psíquico",
				'de-de': "Psystrahl"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
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

	retreat: 1,

	description: {
		'en-us': "Its big eyes are actually clusters of tiny eyes. At night, its kind is drawn by light.",
	},

	thirdParty: {
		cardmarket: 372302,
		tcgplayer: 189048
	}
}

export default card
