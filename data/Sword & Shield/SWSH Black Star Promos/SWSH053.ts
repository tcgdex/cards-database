import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Machamp",
		fr: "Mackogneur"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Common",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur"
	},

	attacks: [{
		name: {
			en: "Macho Revenge",
			fr: "Revanche Macho"
		},

		effect: {
			en: "This attack does 20 damage for each Fighting Pokémon in your discard pile.",
			fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon Fighting dans votre pile de défausse."
		},

		damage: "20×",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			en: "Dynamite Punch",
			fr: "Poing Dynamite"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself.",
			fr: "Ce Pokémon s’inflige aussi 50 dégâts."
		},

		damage: 200,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3
}

export default card