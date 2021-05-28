import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Slowbro",
		fr: "Flagadoss de Galar"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Galarian Slowpoke",
		fr: "Ramoloss de Galar"
	},

	attacks: [{
		name: {
			en: "Splattering Poison",
			fr: "Poison Éclaboussant"
		},

		effect: {
			en: "Both Active Pokémon are now Poisoned.",
			fr: "Les deux Pokémon Actifs sont maintenant Empoisonnés."
		},

		cost: ["Darkness"]
	}, {
		name: {
			en: "Unhinged Hammer",
			fr: "Marteau Dérangé"
		},

		effect: {
			en: "If this Pokémon is affected by a Special Condition, this attack does 120 more damage.",
			fr: "Si ce Pokémon est affecté par un État Spécial, cette attaque inflige 120 dégâts supplémentaires."
		},

		damage: "100+",
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card