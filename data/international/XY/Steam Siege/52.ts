import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge",
		'es-es': "Mankey",
		'it-it': "Mankey",
		'pt-br': "Mankey",
		'de-de': "Menki"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		56,
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
			],
			name: {
				'en-us': "Focus Energy",
				'fr-fr': "Puissance",
				'es-es': "Foco Energía",
				'it-it': "Focalenergia",
				'pt-br': "Focalizar Energia",
				'de-de': "Energiefokus"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's Flop attack's base damage is 50.",
				'fr-fr': "Pendant votre prochain tour, les dégâts de base de l'attaque Flop de ce Pokémon sont de 50.",
				'es-es': "Durante tu próximo turno, el daño básico del ataque Vuelta de este Pokémon es de 50.",
				'it-it': "Durante il tuo prossimo turno, i danni base dell'attacco Tonfo di questo Pokémon sono 50.",
				'pt-br': "Durante sua próxima vez de jogar, o dano base do ataque Baque deste Pokémon será 50.",
				'de-de': "Während deines nächsten Zuges beträgt der Grundschaden der Attacke Plumps dieses Pokémon 50 Schadenspunkte."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Flop",
				'fr-fr': "Flop",
				'es-es': "Vuelta",
				'it-it': "Tonfo",
				'pt-br': "Baque",
				'de-de': "Plumps"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives in treetop colonies. If one becomes enraged, the whole colony rampages for no reason.",
	},

	thirdParty: {
		cardmarket: 291622,
		tcgplayer: 121141
	}
}

export default card
