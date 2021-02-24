import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		149,
	],
	hp: 160,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hurricane Charge",
				fr: "Charge Ouragan",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Water Energy card, a Lightning Energy card, or 1 of each from your hand to your Pokémon in any way you like.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Water, une carte Énergie Lightning, ou une de chaque de votre main à vos Pokémon, de la manière que vous voulez.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Impact",
				fr: "Impact du Dragon",
			},
			effect: {
				en: "Discard 3 Energy from this Pokémon.",
				fr: "Défaussez 3 Énergies de ce Pokémon.",
			},
			damage: 170,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
