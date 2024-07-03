import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [384],
	set: Set,

	name: {
		en: "M Rayquaza EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 220,
	types: ["Colorless"],
	stage: "MEGA",
	suffix: "EX",

	abilities: [{
		type: "Ancient Trait",

		name: {
			en: "Δ Evolution"
		},

		effect: {
			en: "You may play this card from your hand to evolve a Pokémon during your first turn or the turn you play that Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Emerald Break"
		},

		effect: {
			en: "This attack does 30 damage times the number of your Benched Pokémon."
		},

		damage: "30×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false
	}
}

export default card
