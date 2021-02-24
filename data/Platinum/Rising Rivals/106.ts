import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Gallade 4",
		fr: "Gallame  Niv. X",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		475,
	],
	hp: 100,
	types: [
		"Psychic",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Blade Storm",
				fr: "Tempête de lames",
			},
			effect: {
				en: "Once during your turn (before your attack), when you put Gallade LV.X from your hand onto your Active Gallade , you may put 1 damage counter on each of your opponent's Pokémon.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Gallame  LV.X de votre main sur votre Gallame  Actif, vous pouvez placer 1 marqueur de dégât sur chacun des Pokémon de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aimed Cut",
				fr: "Coupure ciblée",
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur le Pokémon Défenseur.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
