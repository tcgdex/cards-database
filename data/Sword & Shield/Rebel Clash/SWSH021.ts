import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Polteageist V"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "None",
	category: "Pokemon",
	dexId: [855],
	hp: 170,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Teapot of Surprises"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an opponent's attack (even if it is Knocked Out), choose a random card from your opponent's hand. Your opponent reveals that card and puts it on the bottom of their deck."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Mind Bend"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused."
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card