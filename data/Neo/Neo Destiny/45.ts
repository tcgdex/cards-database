import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Dewgong",
		fr: "Lamantine lumineux",
		de: "Helles Jugong"
	},

	illustrator: "Masako Yamashita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		87,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Seel",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Freezing Breath",
				fr: "Souffle glacial",
				de: "Freezing Breath"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, le Pokémon Défenseur est maintenant Endormi.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Ice Pillar",
				fr: "Colonne de glace",
				de: "Ice Pillar"
			},
			effect: {
				en: "Until the end of your opponent's next turn, as long as Light Dewgong is your Active Pokémon, prevent all damage done by attacks to your Benched Pokémon. (Any other effects of attacks still happen.)",
				fr: "Jusqu'à la fin du prochain tour de votre adversaire, tant que Lamantine lumineux est votre Pokémon Actif, prévenez tous les dégâts infligés par des attaques à votre Pokémon du Banc. (Tous les autres effets dus à des attaques subsistent.)",
				de: "Until the end of your opponent's next turn, as long as Light Dewgong is your Active Pokémon, prevent all damage done by attacks to your Benched Pokémon. (Any other effects of attacks still happen.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Il a une forme aérodynamique qui lui permet de nager à de grandes vitesses. Plus l'eau est froide, plus il est actif."
	}
}

export default card
