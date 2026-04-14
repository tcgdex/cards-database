import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Sylveon ex",
		fr: "Nymphali-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [700],
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		en: "Eevee"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Happy Ribbon",
			fr: "Ruban du Bonheur"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may draw 2 cards.",
			fr: "Une fois lors de votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer un de vos Pokémon, vous pouvez piocher 2 cartes."
		}
	}],

	attacks: [{
		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique"
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