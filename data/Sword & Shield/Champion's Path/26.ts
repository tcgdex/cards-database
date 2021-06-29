import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur",
		es: "Machamp",
		it: "Machamp",
		pt: "Machamp",
		de: "Machomei"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 170,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur"
	},

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Macho Revenge",
				fr: "Revanche Macho",
				es: "Machovenganza",
				it: "Vendetta Bellimbusto",
				pt: "Machocante",
				de: "Macho-Vergeltung"
			},
			effect: {
				en: "This attack does 20 damage for each Fighting Pokémon in your discard pile.",
				fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon Fighting dans votre pile de défausse.",
				es: "Este ataque hace 20 puntos de daño por cada Pokémon Fighting en tu pila de descartes.",
				it: "Questo attacco infligge 20 danni per ogni Pokémon Fighting nella tua pila degli scarti.",
				pt: "Este ataque causa 20 pontos de dano para cada Pokémon Fighting na sua pilha de descarte.",
				de: "Diese Attacke fügt für jedes Fighting-Pokémon in deinem Ablagestapel 20 Schadenspunkte zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Dynamite Punch",
				fr: "Poing Dynamite",
				es: "Puño Dinamita",
				it: "Pugno Dinamite",
				pt: "Soco Dinamite",
				de: "Dynamitstoß"
			},
			effect: {
				en: "This Pokémon also does 50 damage to itself.",
				fr: "Ce Pokémon s’inflige aussi 50 dégâts.",
				es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge anche 50 danni a se stesso.",
				pt: "Este Pokémon também causa 50 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D"
}

export default card
