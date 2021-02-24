import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Wailord",
		fr: "Wailord",
	},
	illustrator: "OOYAMA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		321,
	],
	hp: 200,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Dive",
				fr: "Plongée",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				fr: "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Open Sea",
				fr: "Grande Bleue",
			},
			effect: {
				en: "Heal 30 damage from each of your Water Pokémon.",
				fr: "Soignez 30 dégâts à chacun de vos Pokémon Water.",
			},
			damage: 80,

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
