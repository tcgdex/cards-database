import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Cloyster",
		fr: "Crustabri",
		es: "Cloyster",
		it: "Cloyster",
		pt: "Cloyster",
		de: "Austos"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		en: "Shellder",
		fr: "Kokiyas",
		es: "Shellder",
		it: "Shellder",
		pt: "Shellder",
		de: "Muschas"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "nagimiso",

	description: {
		en: "Once it slams its shell shut, it is impossible to open, even by those with superior strength."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Shell Armor"
		},

		effect: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Aqua Split"
		},

		damage: 60,

		effect: {
			en: "This attack also does 30 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
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