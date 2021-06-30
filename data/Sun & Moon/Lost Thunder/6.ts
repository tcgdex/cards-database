import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Chikorita",
		fr: "Germignon",
		es: "Chikorita",
		it: "Chikorita",
		pt: "Chikorita",
		de: "Endivie"
	},
	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		152,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Mini Drain",
				fr: "Mini-Assèchement",
				es: "Minidrenaje",
				it: "Miniassorbimento",
				pt: "Minidreno",
				de: "Minisauger"
			},
			effect: {
				en: "Heal 10 damage from this Pokémon.",
				fr: "Soignez 10 dégâts à ce Pokémon.",
				es: "Cura 10 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 10 danni.",
				pt: "Cure 10 pontos de dano deste Pokémon.",
				de: "Heile 10 Schadenspunkte bei diesem Pokémon."
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
