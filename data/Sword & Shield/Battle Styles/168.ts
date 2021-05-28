import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Single Strike Urshifu VMAX",
		fr: "Shifours Poing Final VMAX"
	},

	illustrator: "Kinu Nishimura",
	rarity: "Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],

	evolveFrom: {
		en: "Single Strike Urshifu V",
		fr: "Shifours Poing Final-V"
	},

	attacks: [{
		name: {
			en: "Beatdown",
			fr: "Dérouillée"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			en: "G-Max One Blow",
			fr: "Coup Final G-Max"
		},

		effect: {
			en: "Discard all Energy from this Pokémon. This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon.",
			fr: "Défaussez toute l’Énergie de ce Pokémon. Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire."
		},

		damage: 270,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card