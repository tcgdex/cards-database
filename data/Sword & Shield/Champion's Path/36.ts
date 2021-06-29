import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Galarian Linoone",
		fr: "Linéon de Galar",
		es: "Linoone de Galar",
		it: "Linoone di Galar",
		pt: "Linoone de Galar",
		de: "Galar-Geradaks"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Galarian Zigzagoon",
		fr: "Zigzaton de Galar"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-Edge",
				fr: "Damoclès",
				es: "Doble Filo",
				it: "Sdoppiatore",
				pt: "Faca de Dois Gumes",
				de: "Risikotackle"
			},
			effect: {
				en: "This Pokémon also does 20 damage to itself.",
				fr: "Ce Pokémon s’inflige aussi 20 dégâts.",
				es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge anche 20 danni a se stesso.",
				pt: "Este Pokémon também causa 20 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
