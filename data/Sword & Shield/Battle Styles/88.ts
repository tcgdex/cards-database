import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Rapid Strike Urshifu VMAX",
		fr: "Shifours Mille Poings VMAX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rapid Strike Urshifu V",
		fr: "Shifours Mille Poings-V"
	},

	attacks: [{
		name: {
			en: "Gale Thrust",
			fr: "Coup d’Bourrasque"
		},

		effect: {
			en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 120 more damage.",
			fr: "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 120 dégâts supplémentaires."
		},

		damage: "30+",
		cost: ["Fighting"]
	}, {
		name: {
			en: "G-Max Rapid Flow",
			fr: "Multicoup G-Max"
		},

		effect: {
			en: "Discard all Energy from this Pokémon. This attack does 120 damage to 2 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez toute l’Énergie de ce Pokémon. Cette attaque inflige 120 dégâts à 2 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card