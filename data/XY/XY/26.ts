import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Delphox",
		fr: "Goupelin",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		655,
	],
	hp: 140,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Braixen",
		fr: "Roussil",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mystical Fire",
				fr: "Feu Ensorcelé",
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw cards until you have 6 cards in your hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu'à ce que vous ayez 6 cartes en main.",
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
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
