import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [9],
	set: Set,

	name: {
		en: "Blastoise"
	},

	illustrator: "Ken Sugimori",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage2",

	attacks: [{
		name: {
			en: "Hydro Pump"
		},

		effect: {
			en: "Does 40 damage plus 10 more damage for each Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. Extra Water Energy after the 2nd doesn't count."
		},

		damage: "40+",
		cost: ["Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: ""
	}],

	retreat: 3,

	description: {
		en: "A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles."
	},

	abilities: [{
		type: "Pokemon Power",

		name: {
			en: "Rain Dance"
		},

		effect: {
			en: "As often as you like during your turn (before your attack), you may attach 1 Water Energy card to 1 of your Water Pokémon. (This doesn't use up your 1 Energy card attachment for the turn.) This power can't be used if Blastoise is Asleep, Confused, or Paralyzed."
		}
	}]
}

export default card
