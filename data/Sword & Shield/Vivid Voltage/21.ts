import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Orbeetle VMAX",
		fr: "Astronelle VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 310,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Orbeetle V",
		fr: "Astronelle-V"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Eerie Beam",
				fr: "Faisceau Étrange"
			},
			effect: {
				en: "Once during your turn, if this Pokémon is in the Active Spot, you may put 1 damage counter on each of your opponent’s Pokémon.",
				fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez placer un marqueur de dégâts sur chacun des Pokémon de votre adversaire."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "G-Max Wave",
				fr: "Onde G-Max"
			},
			effect: {
				en: "This attack does 50 more damage for each Energy attached to your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
