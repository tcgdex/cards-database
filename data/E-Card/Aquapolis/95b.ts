import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M.Mime"
	},
	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		122,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [{
		name: {
			fr: "Barrière d'énergie"
		},

		effect: {
			fr: "Si M. Mime devait subir les dégâts d'une attaque, réduisez ces dégâts de 10 pour chaque carte Énergie de base attachée à M. Mime. La quantité maximum de dégâts pouvant être réduits par la Barrière d'énergie est 20."
		},

		type: "Poke-BODY"
	}],


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Mind Shock",
				fr: "Choc mémoriel"
			},
			effect: {
				en: "Don't apply Weakness and Resistance.",
				fr: "N'appliquez ni la Faiblesse, ni la Résistance."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
