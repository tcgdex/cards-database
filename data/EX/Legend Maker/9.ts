import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		68,
	],
	hp: 120,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Machoke",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Derail",
				fr: "Dérailler"
			},
			effect: {
				en: "Discard a Special Energy card, if any, attached to the Defending Pokémon.",
				fr: "Défaussez une carte Énergie spéciale attachée au Pokémon Défenseur, s'il en a."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swift Blow",
				fr: "Coup surprise"
			},
			effect: {
				en: "Does 60 damage plus 20 damage for each React Energy card attached to Machamp.",
				fr: "Inflige 60 dégâts plus 20 dégâts supplémentaires pour chaque Énergie réaction attachée à Mackogneur."
			},
			damage: "60+",

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
