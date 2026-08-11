import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Spinda",
		'fr-fr': "Spinda",
		'es-es': "Spinda",
		'it-it': "Spinda",
		'pt-br': "Spinda",
		'de-de': "Pandir"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		327,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Teeter Punch",
				'fr-fr': "Coup de Poing Fou",
				'es-es': "Puño Vacilante",
				'it-it': "Strampapugno",
				'pt-br': "Soco Cambaleante",
				'de-de': "Taumelnder Schlag"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its steps are staggering and unsteady, but Spinda thinks it's walking in a straight line.",
	},

	thirdParty: {
		cardmarket: 295414,
		tcgplayer: 126974
	}
}

export default card
