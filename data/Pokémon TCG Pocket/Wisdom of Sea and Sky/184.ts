import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Smeargle"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "One Star",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		en: "The fluid of Smeargle's tail secretions changes\nin the intensity of its hue as the Pokémon's\nemotions change."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Splatter Coating"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Change the type of a random Energy attached to your opponent's Active Pokémon to 1 of the following at random: {G}, {R}, {W}, {L}, {P}, {F}, {D}, or {M}."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card