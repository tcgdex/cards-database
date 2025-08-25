import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Flareon EX",
		fr: "Pyroli-EX",
	},

	illustrator: "kirisAki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 170,

	types: [
		"Fire",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flash Fire",
				fr: "Torche",
			},
			effect: {
				en: "Once during your turn (before your attack), you may move a Fire Energy from 1 of your Pokémon to this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Fire de l'un de vos Pokémon vers ce Pokémon.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blaze Ball",
				fr: "Balle Incendiaire",
			},
			effect: {
				en: "This attack does 20 more damage for each Fire Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Fire attachée à ce Pokémon.",
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 288515
	}
}

export default card
