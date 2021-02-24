import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		442,
	],
	hp: 60,
	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Building Spite",
				fr: "Mépris Grandissant",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put 1 damage counter on this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer un marqueur de dégâts sur ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Anguish Cry",
				fr: "Cri Angoissé",
			},
			effect: {
				en: "This attack does 30 more damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: 10,

		},
	],


	retreat: 1,



}

export default card
