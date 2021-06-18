import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Tornadus V",
		fr: "Boréas V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Blow Through",
			fr: "Grosse Bourrasque"
		},

		effect: {
			en: "If a Stadium is in play, this attack does 20 more damage.",
			fr: "Si un Stade est en jeu, cette attaque inflige 20 dégâts supplémentaires."
		},

		damage: "20+",
		cost: ["Colorless"]
	}, {
		name: {
			en: "Blasting Hammer",
			fr: "Marteau Impitoyable"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon."
		},

		damage: 180,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card