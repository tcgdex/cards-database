import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Zamazenta V",
		fr: "Zamazenta V"
	},

	illustrator: "aky CG Works",
	rarity: "Common",
	category: "Pokemon",
	hp: 230,
	types: ["Metal"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Dauntless Shield",
			fr: "Égide Inflexible"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent’s Pokémon VMAX.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-VMAX de votre adversaire."
		}
	}],

	attacks: [{
		name: {
			en: "Assault Tackle",
			fr: "Tacle Assaillant"
		},

		effect: {
			en: "Discard a Special Energy from your opponent’s Active Pokémon.",
			fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire."
		},

		damage: 130,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2
}

export default card