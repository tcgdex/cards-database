import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Dewgong",
		pt: "Dewgong",
		fr: "Lamantine",
		de: "Jugong"
	},

	illustrator: "Mitsuhiro Arita",
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
		pt: "Seel",
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
				en: "Aurora Beam",
				pt: "Raio Aurora",
				fr: "Onde Boréale",
				de: "Aurorastrahl"
			},

			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Beam",
				pt: "Raio Congelante",
				fr: "Laser Glace",
				de: "Ice Beam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				pt: "Tire 'cara ou coroa'. Se der 'cara', o Pokémon Defensor agora está Paralisado.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Il emmagasine la chaleur dans son corps. Il peut nager dans l'eau glacée à plus de 8 nœuds."
	}
}

export default card
