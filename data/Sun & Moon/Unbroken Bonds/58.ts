import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Charjabug",
		fr: "Chrysapile",
	},
	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		737,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Grubbin",
		fr: "Larvibule",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Battery",
				fr: "Batterie",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach this card from your hand to 1 of your Vikavolt or Vikavolt-GX as a Special Energy card. This card provides 2 Lightning Energy only while it's attached to a Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher cette carte de votre main à l’un de vos Lucanon ou Lucanon-GX comme carte Énergie spéciale. Cette carte ne fournit 2 Énergies Lightning que lorsqu’elle est attachée à ce Pokémon.",
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
				en: "Pierce",
				fr: "Transpercement",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
