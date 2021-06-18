import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Boréas V",
		en: "Tornadus V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],

	attacks: [{
		name: {
			fr: "Grosse Bourrasque",
			en: "Blow Through"
		},

		effect: {
			fr: "Si un Stade est en jeu, cette attaque inflige 20 dégâts supplémentaires.",
			en: "If a Stadium is in play, this attack does 20 more damage."
		},

		damage: "20+",
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Marteau Impitoyable",
			en: "Blasting Hammer"
		},

		effect: {
			fr: "Défaussez une Énergie de ce Pokémon.",
			en: "Discard an Energy from this Pokémon."
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