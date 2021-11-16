import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Darumaka",
		fr: "Darumarond de Galar",
		es: "Darumaka de Galar",
		it: "Darumaka di Galar",
		pt: "Darumaka de Galar",
		de: "Galar-Flampion"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Atsuko Nishida",

	description: {
		en: "The colder they get, the more energetic they are. They freeze their breath to make snowballs, using them as ammo for playful snowball fights."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Reckless Charge"
		},

		damage: 20,

		effect: {
			en: "Flip a coin. If tails, this Pokémon also does 10 damage to itself."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card