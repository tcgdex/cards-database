import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Wailmer",
		fr: "Wailmer",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		320,
	],
	hp: 120,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Wave Swallower",
				fr: "Dévoreur de Vagues",
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, heal 50 damage from this Pokémon.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Pour chaque côté face, soignez 50 dégâts à ce Pokémon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
