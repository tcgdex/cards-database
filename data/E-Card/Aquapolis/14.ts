import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Démolosse"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		229,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Houndour",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Smokescreen",
				fr: "Brouillard"
			},
			effect: {
				en: "If the defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, votre adversaire lance une pièce. Si c'est pile, cette attaque ne fait rien."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Burn Up",
				fr: "Brûlure"
			},
			effect: {
				en: "Flip a coin. If tails, discard all Energy cards attached to Houndoom.",
				fr: "Lancez une pièce. Si c'est pile, défaussez-vous de toutes les cartes Énergie  attachée à Démolosse."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
