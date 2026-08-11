import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Wingull",
		'fr-fr': "Goélise",
		'es-es': "Wingull",
		'it-it': "Wingull",
		'pt-br': "Wingull",
		'de-de': "Wingull"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		278,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Roost",
				'fr-fr': "Atterrissage",
				'es-es': "Respiro",
				'it-it': "Trespolo",
				'pt-br': "Poleiro",
				'de-de': "Ruheort"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon. It can’t retreat during your next turn.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon. Il ne peut pas battre en retraite pendant votre prochain tour.",
				'es-es': "Cura 30 puntos de daño a este Pokémon. No puede retirarse durante tu próximo turno.",
				'it-it': "Cura questo Pokémon da 30 danni. Non può ritirarsi durante il tuo prossimo turno.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon. Este Pokémon não poderá recuar durante a sua próxima vez de jogar.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon. Es kann sich während deines nächsten Zuges nicht zurückziehen."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Fishermen keep an eye out for Wingull in the sky, because wherever they're circling, the ocean sure to be is teeming with fish Pokémon.",
	},

	thirdParty: {
		cardmarket: 295347,
		tcgplayer: 126908
	}
}

export default card
