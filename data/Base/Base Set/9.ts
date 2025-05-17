import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Magneton",
		pt: "Magneton",
		fr: "Magneton",
		de: "Magneton"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Magnemite",
		pt: "Magnemite",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Wave",
				pt: "Onda do Trovão",
				fr: "Cage-éclair",
				de: "Donnerwelle"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				pt: "Jogue uma moeda. Se der cara, o Pokémon Defensor agora está Paralisado.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon gelähmt."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Selfdestruct",
				pt: "Autodestruição",
				fr: "Destruction",
				de: "Finale"
			},
			effect: {
				en: "Does 20 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Magneton does 80 damage to itself.",
				pt: "Causa 20 de dano a cada Pokémon no Banco de cada jogador. (Não aplique Fraqueza e Resistência a Pokémon no Banco.) Magneton causa 80 de dano a si mesmo.",
				fr: "Inflige 20 dégâts à chaque Pokémon sur le Banc de chaque joueur. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon sur le Banc.) Magneton s'inflige 80 dégâts.",
				de: "Fügt jedem Pokémon auf der Bank eines Spielers 20 Schadenspunkte zu. (Schwäche und Resistenz nicht auf Pokémon auf der Bank anwenden!) Magneton fügt sich selbst 80 Schadenspunkte zu."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Constitué de Magneti reliés les uns aux autres, il apparaît lorsque le soleil brille."
	}
}

export default card
