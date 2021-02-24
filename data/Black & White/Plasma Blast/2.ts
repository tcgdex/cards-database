import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Masquerain",
		fr: "Maskadra",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		284,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Tool Reversal",
				fr: "Aspire-Outil",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may put a Pokémon Tool card attached to 1 of your Pokémon into your hand.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez placer une carte Outil Pokémon attachée à 1 de vos Pokémon dans votre main.",
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
				en: "Bug Bite",
				fr: "Piqûre",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
