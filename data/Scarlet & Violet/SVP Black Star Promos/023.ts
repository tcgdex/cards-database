import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [928],
	set: Set,

	name: {
		en: "Smoliv",
		es: "Smoliv",
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
			es: "Nutrientes",
		},

		effect: {
			en: "Heal 30 damage from 1 of your Pokémon.",
			es: "Cura 30 puntos de daño a uno de tus Pokémon.",
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Spray Fluid",
			es: "Fluido Rociado",
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
