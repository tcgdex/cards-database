import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	name: {
		en: "Charizard"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [{
		name: {
			en: "Fire Spin"
		},

		effect: {
			en: "Discard 2 Energy cards attached to Charizard in order to use this attack."
		},

		damage: 100,
		cost: ["Fire", "Fire", "Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: ""
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,

	description: {
		en: "Spits fire that is hot enough to melt boulders. Known to unintentionally cause forest fires."
	},

	abilities: [{
		type: "Pokemon Power",

		name: {
			en: "Energy Burn"
		},

		effect: {
			en: "As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn. This power can't be used if Charizard is Asleep, Confused, or Paralyzed."
		}
	}]
}

export default card
