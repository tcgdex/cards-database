import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sylveon ex",
		'fr-fr': "Nymphali-ex"
	},

	illustrator: "Yuu Nishida",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [700],
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Eevee"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Happy Ribbon",
			'fr-fr': "Ruban du Bonheur"
		},

		effect: {
			'en-us': "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may draw 2 cards.",
			'fr-fr': "Une fois lors de votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer un de vos Pokémon, vous pouvez piocher 2 cartes."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Fairy Wind",
			'fr-fr': "Vent Féérique"
		},

		damage: 70,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card