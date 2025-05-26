import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Machamp",
		fr: "Mackogneur",
		es: "Machamp",
		it: "Machamp",
		pt: "Machamp",
		de: "Machomei"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
		de: "Maschock",
		es: "Machoke",
		pt: "Machoke",
		it: "Machoke"
	},

	attacks: [{
		name: {
			en: "Macho Revenge",
			fr: "Revanche Macho",
			es: "Machovenganza",
			it: "Vendetta Bellimbusto",
			pt: "Machocante",
			de: "Macho-Vergeltung"
		},

		effect: {
			en: "This attack does 20 damage for each {F} Pokémon in your discard pile.",
			fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon {F} dans votre pile de défausse.",
			es: "Este ataque hace 20 puntos de daño por cada Pokémon {F} en tu pila de descartes.",
			it: "Questo attacco infligge 20 danni per ogni Pokémon {F} nella tua pila degli scarti.",
			pt: "Este ataque causa 20 pontos de dano para cada Pokémon {F} na sua pilha de descarte.",
			de: "Diese Attacke fügt für jedes {F}-Pokémon in deinem Ablagestapel 20 Schadenspunkte zu."
		},

		damage: "20×",
		cost: ["Fighting", "Colorless"]
	}, {
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
			fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
			es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 50 danni a se stesso.",
			pt: "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 200,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,

	description: {
		en: "It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles."
	},

	stage: "Stage2",
	dexId: [68],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
