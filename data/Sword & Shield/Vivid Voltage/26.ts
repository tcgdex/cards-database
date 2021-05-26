import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Flareon",
		fr: "Pyroli"
	},
	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Incandescent Awakening",
				fr: "Éveil Incandescent"
			},
			effect: {
				en: "If this Pokémon has a Memory Capsule attached, Grass Pokémon in play (both yours and your opponent’s) have no Abilities.",
				fr: "Si une carte Capsule Mémoire est attachée à ce Pokémon, les Pokémon Grass en jeu (les vôtres et ceux de votre adversaire) n’ont pas de talent."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Mane",
				fr: "Crinière de Feu"
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
