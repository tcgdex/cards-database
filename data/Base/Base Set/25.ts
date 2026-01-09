import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Dewgong",
		fr: "Lamantine",
		de: "Jugong",
		it: "Dewgong"
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
		it: "Seel"
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
				fr: "Onde Boréale",
				de: "Aurorastrahl",
				it: "Raggiaurora"
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
				fr: "Laser Glace",
				de: "Ice Beam",
				it: "Geloraggio"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				it: "Lancia una moneta. Se esce testa, il Pokémon difensore è Paralizzato."
			},
			damage: 30,

		},
	],

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Il emmagasine la chaleur dans son corps. Il peut nager dans l'eau glacée à plus de 8 nœuds.",
		it: "Conserva energia termica nel suo corpo. Nuota ad una velocità costante di 8 nodi anche in acque estremamente fredde. LIV 42 N.87"
	},

	thirdParty: {
		cardmarket: 273720,
		tcgplayer: 42366
	}
}

export default card
