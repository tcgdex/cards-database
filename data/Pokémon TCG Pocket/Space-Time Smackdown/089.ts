import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Rampardos"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Cranidos"
	},

	description: {
		en: "In ancient times, people would dig up fossils of this Pokémon and use its skull, which is harder than steel, to make helmets."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Head Smash"
		},

		damage: 130,
		cost: ["Fighting"],

		effect: {
			en: "If your opponent's Pokémon is Knocked Out by damage from this attack, this Pokémon also does 50 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card
