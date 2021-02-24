import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Vanilluxe",
		fr: "Sorbouboul",
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		584,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Vanillish",
		fr: "Sorboul",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Slippery Soles",
				fr: "Sol Verglacé",
			},
			effect: {
				en: "Once during your turn (before your attack), you may switch your Active Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger votre Pokémon Actif avec 1 de vos Pokémon de Banc. Dans ce cas, votre adversaire échange son Pokémon Actif avec 1 de ses Pokémon de Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crushing Ice",
				fr: "Brise-Glace",
			},
			effect: {
				en: "Does 10 more damage for each Colorless in the Defending Pokémon's Retreat Cost.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque Colorless dans le coût de Retraite du Pokémon Défenseur.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
