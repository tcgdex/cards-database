import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		523,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Blitzle",
		fr: "Zébibron",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Disconnect",
				fr: "Déconnexion",
			},
			effect: {
				en: "Your opponent can't play any Item cards from his or her hand during his or her next turn.",
				fr: "Votre adversaire ne peut pas jouer de cartes Objet de sa main pendant son prochain tour.",
			},
			damage: 40,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lightning Crash",
				fr: "Chute d'Éclairs",
			},
			effect: {
				en: "Discard all Lightning Energy attached to this Pokémon. This attack does 80 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez toutes les Énergies Lightning attachées à ce Pokémon. Cette attaque inflige 80 dégâts à 1 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
