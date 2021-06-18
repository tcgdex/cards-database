import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Tornadus VMAX",
		fr: "Boréas VMAX"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Colorless"],

	evolveFrom: {
		en: "Tornadus V",
		fr: "Boréas-V"
	},

	attacks: [{
		name: {
			en: "Blasting Wind",
			fr: "Vent Impitoyable"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Max Wind Spirit",
			fr: "Éolomax"
		},

		effect: {
			en: "If a Stadium is in play, this attack does 120 more damage. Then, discard that Stadium.",
			fr: "Si un Stade est en jeu, cette attaque inflige 120 dégâts supplémentaires. Ensuite, défaussez ce Stade."
		},

		damage: "120+",
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