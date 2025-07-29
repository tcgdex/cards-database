import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Vulpix",
		fr: "Goupix",
		de: "Vulpix"
	},

	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		37,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Ember",
				fr: "Flammèche",
				de: "Ember"
			},
			effect: {
				en: "Discard 1 Energy card attached to this Pokémon in order to use this attack.",
				fr: "Défaussez-vous d'une carte Énergie  attachée à Goupix pour pouvoir utiliser cette attaque.",
				de: "Discard 1 Energy card attached to Vulpix in order to use this attack."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Tandis qu'il vieillit, sa queue blanche change de couleur et se sépare en six. Il émane de son corps une faible chaleur."
	},

	thirdParty: {
		cardmarket: 274743
	}
}

export default card
