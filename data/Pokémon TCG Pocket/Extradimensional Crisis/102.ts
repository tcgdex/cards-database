import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgeot ex",
		fr: "Roucarnage-ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",
	hp: 170,
	types: ["Colorless"],

	evolveFrom: {
		en: "Pidgeotto"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Scattering Cyclone",
			fr: "Cyclone Ravageur"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Shiny"
}

export default card