import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Shining Raichu",
		fr: "Raichu brillant"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Water",
				"Water",
			],

			name: {
				en: "Thundersquall",
				fr: "Rafale-tonnerre"
			},

			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to that Pokémon for each Energy attached to Shining Raichu. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si votre adversaire a des Pokémon sur son Banc, choisissez l'un d'eux et cette attaque inflige 10 dégâts à ce Pokémon pour chaque Énergie  attachée à Raichu brillant. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)"
			},

			damage: 40
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "S'il vient à court d'électricité au niveau de ses joues, il dresse sa queue pour collecter l'énergie dans l'air ambiant."
	}
}

export default card
