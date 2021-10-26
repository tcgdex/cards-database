import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Oswaldo KATO",
	category: "Pokemon",

	description: {
		en: "One kick from its powerful legs will pulverize a dump truck. Supposedly, this Pokémon runs through the mountains at over 180 mph."
	},

	stage: "Basic",

	name: {
		en: "Galarian Zapdos"
	},

	rarity: "None",
	dexId: [145],
	hp: 110,
	types: ["Fighting"],

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

	retreat: 0,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E"
}

export default card
