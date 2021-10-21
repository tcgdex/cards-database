import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Mew V",
		fr: "Mew V",
		es: "Mew V",
		it: "Mew V",
		pt: "Mew V",
		de: "Mew V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 180,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "X Ball",
				fr: "X Ball",
				es: "Bola X",
				it: "Sfera X",
				pt: "Bola X",
				de: "X-Ball"
			},
			effect: {
				en: "This attack does 30 damage for each Energy attached to both Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts pour chaque Énergie attachée aux deux Pokémon Actifs.",
				es: "Este ataque hace 30 puntos de daño por cada Energía unida a ambos Pokémon Activos.",
				it: "Questo attacco infligge 30 danni per ogni Energia assegnata a ciascuno dei Pokémon attivi.",
				pt: "Este ataque causa 30 pontos de dano para cada Energia ligada a ambos os Pokémon Ativos.",
				de: "Diese Attacke fügt für jede an beide Aktive Pokémon angelegte Energie 30 Schadenspunkte zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	regulationMark: "D",
	retreat: 0,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
