import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Stoutland"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Herdier"
	},

	description: {
		en: "These Pokémon seem to enjoy living with humans.<br />Even a Stoutland caught in the wild will warm up<br />to people in about three days."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Guard Dog Visage"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon cost 1 <span class=\"energy-text energy-text--type-colorless\"></span> more."
		}
	}],

	attacks: [{
		name: {
			en: "Sharp Fang"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card