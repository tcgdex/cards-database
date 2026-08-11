import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dragonair",
		'es-es': "Dragonair"
	},

	illustrator: "Shinya Komatsu",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [148],
	hp: 100,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Dratini",
		'es-es': "Dratini"
	},

	description: {
		'en-us': "They say that if it emits an aura from its whole\nbody, the weather will begin to change instantly.",
		'es-es': "Dicen que, cuando su cuerpo desprende un aura,\nel tiempo empieza a cambiar inmediatamente."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Shed Skin",
			'es-es': "Mudar"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon."
		}
	}],

	retreat: 2,
	boosters: ["vol10"],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}]
}

export default card