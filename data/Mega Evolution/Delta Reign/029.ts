import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		fr: "Froussardine-ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [746],
	hp: 260,
	types: ["Water"],
	stage: "Basic",
	suffix: "ex",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Gain Océanique"
		},

		effect: {
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez utiliser ce talent. Soignez 50 dégâts de ce Pokémon."
		}
	}],

	attacks: [{
		name: {
			fr: "Hydro-Éclaboussure"
		},

		cost: ["Water", "Water", "Water", "Colorless"],

		damage: 220
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{ type: "holo" }
	],
}

export default card
