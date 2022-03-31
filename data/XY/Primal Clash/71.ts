import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Tentacool",
		fr: "Tentacool",
		es: "Tentacool",
		it: "Tentacool",
		pt: "Tentacool",
		de: "Tentacha"
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
				fr: "Régénération α",
				en: "α Recovery",
				es: "{title}:",
				it: "{title}:",
				pt: "{title}:",
				de: "{title}:"
			},
			effect: {
				fr: "Lorsque ce Pokémon est soigné, doublez la quantité de soins.",
				en: "When this Pokémon is healed, double the amount healed.",
				es: "{title}: Cuando este Pokémon sea curado, dobla la cantidad curada.",
				it: "{title}: Quando curi questo Pokémon, raddoppia la quantità di danni che stai curando.",
				pt: "{title}: Quando este Pokémon for curado, dobre a quantidade curada.",
				de: "{title}: Wenn dieses Pokémon geheilt wird, verdoppele die geheilten Schadenspunkte."
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
				en: "Psyshot",
				fr: "Piqûre Psy",
				es: "Disparo Psi",
				it: "Psicosparo",
				pt: "Tiro Psíquico",
				de: "Psychoschuss"
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



}

export default card
