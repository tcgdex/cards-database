import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		474,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Porygon2",
		fr: "Porygon2",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Crazy Code",
				fr: "Code Fou",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may attach a Special Energy card from your hand to 1 of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie spéciale de votre main à l’un de vos Pokémon.",
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
				en: "Tantrum",
				fr: "Mauvaise Humeur",
			},
			effect: {
				en: "This Pokémon is now Confused.",
				fr: "Ce Pokémon est maintenant Confus.",
			},
			damage: 120,

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
