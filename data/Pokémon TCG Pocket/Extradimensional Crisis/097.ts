import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgeot",
		fr: "Roucarnage"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",

	dexId: [18],
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		en: "Pidgeotto"
	},

	description: {
		en: "When hunting, it skims the surface of water\nat high speed to pick off unwary prey such\nas Magikarp.",
		fr: "Il survole la surface de l'eau pour repérer une proie et plonge en piqué pour l'attraper."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Drive Off",
			fr: "Déroute"
		},

		effect: {
			en: "Once during your turn, you may switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			fr: "Une fois pendant votre tour, vous pouvez échanger le Pokémon Actif de votre adversaire contre l'un de ses Pokémon de Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)"
		}
	}],

	attacks: [{
		name: {
			en: "Wing Attack",
			fr: "Cru-Ailes"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Shiny"
}

export default card