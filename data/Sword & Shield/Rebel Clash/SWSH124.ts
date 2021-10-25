import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Zapdos"
	},

	illustrator: "Oswaldo KATO",
	rarity: "None",
	category: "Pokemon",
	dexId: [145],
	hp: 110,
	types: ["Fighting"],

	description: {
		en: "One kick from its powerful legs will pulverize a dump truck. Supposedly, this Pokémon runs through the mountains at over 180 mph."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Strong Legs Charge"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may attach up to 2 Fighting Energy cards from your hand to this Pokémon."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Zapper Kick"
		},

		effect: {
			en: "You may discard all Energy from this Pokémon. If you do, your opponent's Active Pokémon is now Paralyzed."
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 0
}

export default card