import { Card } from '../../../interfaces'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		en: "Meganium",
		fr: "Meganium"
	},
	illustrator: "Noriko Hotta",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		154,
	],
	hp: 150,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Bayleef",
		fr: "Macronium"
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Leaf Trans",
				fr: "Transfo feuille"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Grass Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Meganium is affected by a Special Condition.",
				fr: "Autant de fois que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez déplacer une carte Énergie  attachée à l'un de vos Pokémon sur un autre Pokémon. Ce pouvoir ne peut pas être utilisé si Meganium est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solarbeam",
				fr: "Lance-soleil"
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
