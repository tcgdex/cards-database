import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Bouffalant",
		fr: "Frison"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Sap Sipper",
			fr: "Herbivore"
		},

		effect: {
			en: "This Pokémon’s attacks do 60 more damage to your opponent’s Grass Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de ce Pokémon infligent 60 dégâts supplémentaires aux Pokémon Grass de votre adversaire (avant application de la Faiblesse et de la Résistance)."
		}
	}],

	attacks: [{
		name: {
			en: "Head Charge",
			fr: "Peignée"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s’inflige aussi 30 dégâts."
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card