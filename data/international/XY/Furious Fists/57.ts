import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Mienshao",
		'fr-fr': "Shaofouine",
		'es-es': "Mienshao",
		'it-it': "Mienshao",
		'pt-br': "Mienshao",
		'de-de': "Wie-Shu"
	},

	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		620,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Mienfoo",
		'fr-fr': "Kungfouine",
		'es-es': "Mienfoo",
		'it-it': "Mienfoo",
		'pt-br': "Mienfoo",
		'de-de': "Lin-Fu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Aero Turn",
				'fr-fr': "Tour Aérien",
				'es-es': "Giro Aéreo",
				'it-it': "Virata",
				'pt-br': "Virada Aérea",
				'de-de': "Aero-Kehre"
			},
			effect: {
				'en-us': "Return this Pokémon and all cards attached to it to your hand.",
				'fr-fr': "Reprenez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
				'es-es': "Devuelve este Pokémon y todas las cartas unidas a él a tu mano.",
				'it-it': "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
				'pt-br': "Devolva este Pokémon e todos os cards ligados a ele para sua mão.",
				'de-de': "Nimm dieses Pokémon und alle daran angelegten Karten zurück auf deine Hand."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "High Jump Kick",
				'fr-fr': "Pied Voltige",
				'es-es': "Patada Salto Alta",
				'it-it': "Calcinvolo",
				'pt-br': "Chute de Pulo Alto",
				'de-de': "Turmkick"
			},

			damage: 40,

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
		'en-us': "It wields the fur on its arm like a whip. Its arm attacks come with such rapidity that they cannot even be seen.",
	},

	thirdParty: {
		cardmarket: 281721,
		tcgplayer: 92234
	}
}

export default card
