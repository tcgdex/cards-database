import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Ludicolo",
		'fr-fr': "Ludicolo",
		'es-es': "Ludicolo",
		'it-it': "Ludicolo",
		'pt-br': "Ludicolo",
		'de-de': "Kappalores"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		272,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Rain Dish",
				'fr-fr': "Cuvette",
				'es-es': "Cura Lluvia",
				'it-it': "Copripioggia",
				'pt-br': "Prato de Chuva",
				'de-de': "Regengenuss"
			},
			effect: {
				'en-us': "At any time between turns, heal 20 damage from this Pokémon.",
				'fr-fr': "N’importe quand entre chaque tour, soignez 20 dégâts à ce Pokémon.",
				'es-es': "En cualquier momento entre turnos, cura 20 puntos de daño a este Pokémon.",
				'it-it': "Tra un turno e l’altro, in qualsiasi momento, cura questo Pokémon da 20 danni.",
				'pt-br': "A qualquer momento entre as vezes de jogar, cure 20 de danos deste Pokémon.",
				'de-de': "Heile zu einem beliebigen Zeitpunkt zwischen den Zügen 20 Schadenspunkte bei diesem Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Groovy Dance",
				'fr-fr': "Danse Enivrée",
			},
			effect: {
				'en-us': "You may discard an Energy attached to this Pokémon. If you do, the Defending Pokémon is now Confused.",
				'fr-fr': "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "If it hears festive music, all its muscles fill with energy. It can't help breaking out into a dance.",
	},

	thirdParty: {
		cardmarket: 280771,
		tcgplayer: 86901
	}
}

export default card
