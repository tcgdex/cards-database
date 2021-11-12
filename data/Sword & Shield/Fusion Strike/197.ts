import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Goodra",
		fr: "Muplodocus",
		es: "Goodra",
		it: "Goodra",
		pt: "Goodra",
		de: "Viscogon"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	evolveFrom: {
		en: "Sliggoo",
		fr: "Colimucus",
		es: "Sliggoo",
		it: "Sliggoo",
		pt: "Sliggoo",
		de: "Viscargot"
	},

	stage: "Stage2",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Nagomi Nijo",

	description: {
		en: "Its form of offense is forcefully stretching out its horns. The strikes land 100 times harder than any blow from a heavyweight boxer."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Slimy Room"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, whenever your opponent tries to attach an Energy card from their hand to a Pokémon, they must flip a coin. If tails, your opponent discards that Energy card instead of attaching it, and this doesn't use up their Energy attachment for the turn."
		}
	}],

	attacks: [{
		cost: ["Water", "Psychic"],

		name: {
			en: "Buster Tail"
		},

		damage: 120
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card