import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Rocket's Raikou ex",
		fr: "Raikou ex de Rocket"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		243,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunderous Blow",
				fr: "Coup tonitruant"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Lightning Energy attached to Rocket's Raikou ex.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Raikou ex de Rocket."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	abilities: [{
		name: {
			fr: "Explosion d'éclairs"
		},

		effect: {
			fr: "Lorsque vous attachez une carte Énergie  de votre main à Raikou ex de Rocket, vous pouvez choisir 1 des Pokémon Défenseurs et l'échanger avec 1 des Pokémon de Banc de votre adversaire. Votre adversaire choisit le Pokémon de Banc à échanger. Ce pouvoir ne peut pas être utilisé si Raikou ex de Rocket est affecté par un État Spécial."
		},

		type: "Poke-POWER"
	}]
}

export default card
