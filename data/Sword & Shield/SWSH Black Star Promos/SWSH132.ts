import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Dragapult"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Mach Turn"
		},

		damage: 60,

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Diving Swipe"
		},

		damage: 150,

		effect: {
			en: "Discard a random card from your opponent's hand."
		}
	}],

	suffix: "Prime",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		en: "Drakloak",
		fr: "Dispareptil",
		es: "Drakloak",
		it: "Drakloak",
		pt: "Drakloak",
		de: "Phandra"
	}
}

export default card
