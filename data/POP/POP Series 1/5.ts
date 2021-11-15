import { Card } from '../../../interfaces'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		en: "Swampert",
		fr: "Laggron"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		260,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Marshtomp",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Bubble",
				fr: "Écume"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Mud Splash",
				fr: "Jet d'boue"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and flip a coin. If heads, this attack does 20 damage to that Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si votre adversaire possède des Pokémon de Banc, choisissez-en un et lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts à ce Pokémon. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning"
		},
	],

	retreat: 2
}

export default card
