import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Souichirou Gunjima",
	category: "Pokemon",

	description: {
		en: "On the night of a full moon, or when it gets excited, the ring patterns on its body glow yellow."
	},

	stage: "Stage1",

	name: {
		en: "Umbreon"
	},

	rarity: "None",
	dexId: [197],
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Eevee"
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Blindside"
		},

		effect: {
			en: "This attack does 60 damage to 1 of your opponent’s Pokémon that has any damage counters on it. (Don’t apply Weakness and Resistance for Benched Pokémon.)"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Moon Mirage"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Confused."
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card