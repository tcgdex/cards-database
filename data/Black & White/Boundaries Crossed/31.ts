import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Blastoise",
		fr: "Tortank",
	},
	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		9,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wartortle",
		fr: "Carabaffe",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Deluge",
				fr: "Déluge",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may attach a Water Energy card from your hand to 1 of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Water de votre main à 1 de vos Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
			},
			effect: {
				en: "Does 10 more damage for each Water Energy attached to this Pokémon.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
