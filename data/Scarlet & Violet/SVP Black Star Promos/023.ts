import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [928],
	set: Set,

	name: {
		en: "Smoliv",
		fr: "Olivini",
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Nutrients",
			fr: "Nutriments",
		},

		effect: {
			en: "Heal 30 damage from 1 of your Pokémon.",
			fr: "Soignez 30 dégâts de l'un de vos Pokémon.",
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Spray Fluid",
			fr: "Fluide Éclaboussant",
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "Misa Tsutsui",
	description: {
		en: "It protects itself from enemies by emitting oil from the fruit on its head. This oil is bitter and astringent enough to make someone flinch.",
		fr: "Le fruit qui surmonte sa tête sécrète une huile qui le protège de ses adversaires. Ce liquide a un goût si désagréable qu'il fait grimacer.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 703191,
				tcgplayer: 500833
			},
		}
	],
}

export default card
