import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Tutétékri de Galar",
		en: "Galarian Runerigus"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		fr: "Tutafeh de Galar",
		en: "Galarian Yamask"
	},

	attacks: [{
		name: {
			fr: "Mépris Réparti",
			en: "Spreading Spite"
		},

		effect: {
			fr: "Pour chaque marqueur de dégâts sur ce Tutétékri de Galar, placez 2 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît.",
			en: "For each damage counter on this Galarian Runerigus, put 2 damage counters on your opponent’s Pokémon in any way you like."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			fr: "Marteau en Folie",
			en: "Mad Hammer"
		},

		effect: {
			fr: "Ce Pokémon s’inflige aussi 30 dégâts.",
			en: "This Pokémon also does 30 damage to itself."
		},

		damage: 120,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card