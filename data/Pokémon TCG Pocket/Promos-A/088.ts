import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Dragonair",
		es: "Dragonair"
	},

	illustrator: "Shinya Komatsu",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [148],
	hp: 100,
	types: ["Dragon"],

	evolveFrom: {
		en: "Dratini",
		es: "Dratini"
	},

	description: {
		en: "They say that if it emits an aura from its whole\nbody, the weather will begin to change instantly.",
		es: "Dicen que, cuando su cuerpo desprende un aura,\nel tiempo empieza a cambiar inmediatamente."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Shed Skin",
			es: "Mudar"
		},

		cost: ["Colorless"],

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon."
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