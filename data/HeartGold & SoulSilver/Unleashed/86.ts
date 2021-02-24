import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
	},
	illustrator: "Hideaki Hakozaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		171,
	],
	hp: 110,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Submerge",
				fr: "Submerger",
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this power. Lanturn's type is Water until the end of your turn. This power can't be used if Lanturn is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Lanturn devient un Pokémon de type Water jusqu'à la fin de votre tour. Ce pouvoir ne peut pas être utilisé si Lanturn est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Powerful Spark",
				fr: "Étincelle puissante",
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Energy attached to all of your Pokémon.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie attachée à tous vos Pokémon.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
