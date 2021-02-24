import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Sigilyph",
		fr: "Cryptéro",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		561,
	],
	hp: 90,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Safeguard",
				fr: "Rune Protect",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon by Pokémon-EX.",
				fr: "Évitez tous les effets d'attaques (y compris les dégâts) infligés à ce Pokémon par des Pokémon-EX.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
			},
			effect: {
				en: "Does 10 more damage for each Energy attached to the Defending Pokémon.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
			},
			damage: 50,

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
