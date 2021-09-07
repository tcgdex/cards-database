import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Golduck",
		fr: "Akwakwak",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		55,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Natural Remedy",
				fr: "Remède naturel",
			},
			effect: {
				en: "Whenever you attach a Water Energy card from your hand to Golduck, remove 2 damage counters from Golduck.",
				fr: "Lorsque vous attachez une carte Énergie Water de votre main à Akwakwak, retirez-lui 2 marqueurs de dégât.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Powerful Splash",
				fr: "Trempette puissante",
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Water Energy attached to all of your Pokémon.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie Water attachée à tous vos Pokémon.",
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
