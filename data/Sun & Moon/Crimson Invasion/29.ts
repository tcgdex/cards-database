import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Shellos",
		fr: "Sancoki",
		es: "Shellos",
		it: "Shellos",
		pt: "Shellos",
		de: "Schalellos"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		422,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Regeneration",
				fr: "Rétablissement",
				es: "Reanimación",
				it: "Rigenerazione",
				pt: "Regeneração",
				de: "Regeneration"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mud-Slap",
				fr: "Coud’Boue",
				es: "Bofetón Lodo",
				it: "Fangosberla",
				pt: "Tapa de Lama",
				de: "Lehmschelle"
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
