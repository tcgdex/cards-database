import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Charizard EX",
		fr: "Dracaufeu EX",
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 180,

	types: [
		"Fire",
	],

	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Stoke",
			fr: "Cru-Aile",
		},

		damage: 60
	}, {
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			fr: "Explo-Combustion"
		},

		effect: {
			fr: "Ce Pokémon ne peut pas utiliser Explo-Combustion pendant votre prochain tour."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	stage: "Basic"
}

export default card
