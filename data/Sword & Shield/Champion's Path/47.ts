import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Duraludon V",
		fr: "Duralugon V"
	},

	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 220,

	types: [
		"Metal",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hard Coat",
				fr: "Strate Dure"
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance)."
			},
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,

	attacks: [{
		name: {
			en: "Gatling Slug",
			fr: "Frappe Répétée"
		},

		effect: {
			en: "This attack does 40 more damage for each Metal Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie Metal attachée à ce Pokémon."
		},

		damage: "10+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}]
}

export default card
