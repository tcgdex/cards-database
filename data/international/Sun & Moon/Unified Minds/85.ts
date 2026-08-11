import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Azelf",
		'fr-fr': "Créfadet",
		'es-es': "Azelf",
		'it-it': "Azelf",
		'pt-br': "Azelf",
		'de-de': "Tobutz"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		482,
	],

	hp: 70,

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
				'en-us': "Psypower",
				'fr-fr': "Puissance Psy",
				'es-es': "Psicopoder",
				'it-it': "Psicotere",
				'pt-br': "Poder Psíquico",
				'de-de': "Psy-Power"
			},
			effect: {
				'en-us': "Put 3 damage counters on your opponent’s Pokémon in any way you like.",
				'fr-fr': "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				'es-es': "Pon 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				'it-it': "Distribuisci a piacimento tre segnalini danno sui Pokémon del tuo avversario.",
				'pt-br': "Coloque 3 contadores de dano nos Pokémon do seu oponente como desejar.",
				'de-de': "Lege 3 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

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
		'en-us': "Known as \"The Being of Willpower.\" It sleeps at the bottom of a lake to keep the world in balance.",
	},

	thirdParty: {
		cardmarket: 388232,
		tcgplayer: 195015
	}
}

export default card
