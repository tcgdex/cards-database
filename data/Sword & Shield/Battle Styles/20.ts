import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Entei",
		fr: "Entei"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	attacks: [{
		name: {
			en: "Heat Dash",
			fr: "Bouffée de Chaleur"
		},

		effect: {
			en: "You may attach a Fire Energy card from your hand to this Pokémon.",
			fr: "Vous pouvez attacher une carte Énergie Fire de votre main à ce Pokémon."
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			en: "Fire Fang",
			fr: "Crocs Feu"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé."
		},

		damage: 90,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card