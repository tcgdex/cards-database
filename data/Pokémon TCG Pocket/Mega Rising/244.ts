import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Honchkrow",
		fr: "Corboss"
	},

	illustrator: "IKEDA Saki",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [430],
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Murkrow",
		fr: "Cornèbre"
	},

	description: {
		en: "A single cry from this nocturnal Pokémon, and\nmore than 100 of its Murkrow cronies will\nassemble."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Evil Admonition",
			fr: "Réprimande Maléfique"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "This attack does 40 more damage for each of your opponent's Pokémon in play that has an Ability.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chacun des Pokémon de votre adversaire en jeu ayant un talent."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-gyarados"]
}

export default card