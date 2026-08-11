import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Tentacool",
		'fr-fr': "Tentacool",
		'es-es': "Tentacool",
		'it-it': "Tentacool",
		'pt-br': "Tentacool",
		'de-de': "Tentacha"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		72,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Lost in the Waves",
				'fr-fr': "Porté Disparu",
				'es-es': "Perdido entre Olas",
				'it-it': "Alla Deriva",
				'pt-br': "Perdido nas Ondas",
				'de-de': "Tarnwellen"
			},
			effect: {
				'en-us': "Return this Pokémon and all cards attached to it to your hand.",
				'fr-fr': "Reprenez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
				'es-es': "Devuelve este Pokémon y todas las cartas unidas a él a tu mano.",
				'it-it': "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
				'pt-br': "Devolva este Pokémon e todos os cards ligados a ele para sua mão.",
				'de-de': "Nimm dieses Pokémon und alle daran angelegten Karten zurück auf deine Hand."
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
		'en-us': "Drifts in shallow seas. Anglers who hook them by accident are often punished by their stingers.",
	},

	thirdParty: {
		cardmarket: 273601,
		tcgplayer: 95968
	}
}

export default card
