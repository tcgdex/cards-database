import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie",
		'es-es': "Flaaffy",
		'it-it': "Flaaffy",
		'pt-br': "Flaaffy",
		'de-de': "Waaty"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		180,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Signal Beam",
				'fr-fr': "Rayon Signal",
				'es-es': "Doble Rayo",
				'it-it': "Segnoraggio",
				'pt-br': "Feixe Sinalizador",
				'de-de': "Ampelleuchte"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If its coat becomes fully charged with electricity, its tail lights up. It fires hair that zaps on impact.",
	},

	thirdParty: {
		cardmarket: 365715,
		tcgplayer: 178886
	}
}

export default card
