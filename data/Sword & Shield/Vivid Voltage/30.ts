import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Vaporeon",
		fr: "Aquali"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Torrential Awakening",
				fr: "Éveil Torrentiel"
			},
			effect: {
				en: "If this Pokémon has a Memory Capsule attached, Fire Pokémon in play (both yours and your opponent’s) have no Abilities.",
				fr: "Si une carte Capsule Mémoire est attachée à ce Pokémon, les Pokémon Fire en jeu (les vôtres et ceux de votre adversaire) n’ont pas de talent."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Aurora Beam",
				fr: "Onde Boréale"
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

	retreat: 2,
	regulationMark: "D"
}

export default card
