import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Magneton",
		'fr-fr': "Magnéton",
		'es-es': "Magneton",
		'it-it': "Magneton",
		'pt-br': "Magneton",
		'de-de': "Magneton"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Magnemite",
		'fr-fr': "Magnéti",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Zap Cannon",
				'fr-fr': "Élecanon",
				'es-es': "Electrocañón",
				'it-it': "Falcecannone",
				'pt-br': "Canhão Zap",
				'de-de': "Blitzkanone"
			},
			effect: {
				'en-us': "This Pokémon can’t use Zap Cannon during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Élecanon pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Electrocañón durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Falcecannone.",
				'pt-br': "Este Pokémon não poderá usar Canhão Zap durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Blitzkanone während deines nächsten Zuges nicht einsetzen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has about three times the electrical power of Magnemite. For some reason, outbreaks of this Pokémon happen when lots of sunspots appear.",
	},

	thirdParty: {
		cardmarket: 316009,
		tcgplayer: 157699
	}
}

export default card
