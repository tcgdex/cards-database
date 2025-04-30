import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Oricorio"
	},

	illustrator: "Jerky",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "This form of Oricorio has sipped purple nectar. It uses ethereal dance steps to call forth the spirits of the dead."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spiteful Dance"
		},

		damage: 20,
		cost: ["Psychic"],

		effect: {
			en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card