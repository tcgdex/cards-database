import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	illustrator: "Narumi Sato",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Wild Charge",
			fr: "Éclair Fou",
			es: "Voltio Cruel",
			it: "Sprizzalampo",
			pt: "Ataque Selvagem",
			de: "Stromstoß"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665261,
				tcgplayer: 274461
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665261,
				tcgplayer: 274461
			}
		},
	],
}

export default card
