import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Articuno"
	},

	illustrator: "Shin Nagasawa",
	rarity: "None",
	category: "Pokemon",
	dexId: [144],
	hp: 120,
	types: ["Psychic"],

	description: {
		en: "Known as Articuno, this Pokémon fires beams that can immobilize opponents as if they had been frozen solid."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Cruel Charge"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may attach up to 2 Psychic Energy cards from your hand to this Pokémon."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Psylaser"
		},

		effect: {
			en: "Discard all Psychic Energy from this Pokémon. This attack does 120 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card