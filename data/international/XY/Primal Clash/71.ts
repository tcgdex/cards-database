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

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		72,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				'fr-fr': "Régénération α",
				'en-us': "α Recovery",
				'es-es': "{title}:",
				'it-it': "{title}:",
				'pt-br': "{title}:",
				'de-de': "{title}:"
			},
			effect: {
				'fr-fr': "Lorsque ce Pokémon est soigné, doublez la quantité de soins.",
				'en-us': "When this Pokémon is healed, double the amount healed.",
				'es-es': "{title}: Cuando este Pokémon sea curado, dobla la cantidad curada.",
				'it-it': "{title}: Quando curi questo Pokémon, raddoppia la quantità di danni che stai curando.",
				'pt-br': "{title}: Quando este Pokémon for curado, dobre a quantidade curada.",
				'de-de': "{title}: Wenn dieses Pokémon geheilt wird, verdoppele die geheilten Schadenspunkte."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psyshot",
				'fr-fr': "Piqûre Psy",
				'es-es': "Disparo Psi",
				'it-it': "Psicosparo",
				'pt-br': "Tiro Psíquico",
				'de-de': "Psychoschuss"
			},

			damage: 20,

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
		tcgplayer: 95969
	}
}

export default card
