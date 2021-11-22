import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Ambipom",
		fr: "Capidextre"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		424,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Aipom",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Influence",
				fr: "Effet queue"
			},
			effect: {
				en: "Your opponent flips a coin until he or she gets heads. For each tails, remove an Energy card attached to the Defending Pokémon and put it on the bottom of your opponent's deck.",
				fr: "Votre adversaire lance une pièce jusqu'à ce qu'il ou elle obtienne face. Pour chaque pile, retirez une carte Énergie attachée au Pokémon Défenseur et placez-la au dessous du deck de votre adversaire."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Charity Tail",
				fr: "Queue charitable"
			},
			effect: {
				en: "Before Ambipom does damage, your opponent may discard 2 cards from his or her hand. If he or she does, this attack's base damage is 10 instead of 80.",
				fr: "Avant que Capidextre n'inflige des dégâts, votre adversaire peut défausser 2 cartes de sa main. Les dégâts de base de cette attaque sont alors de 10 au lieu de 80."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	description: {
		fr: "Il se nourrit de noix qu'il épluche avec ses deux queues habiles. Il utilise de moins en moins ses bras."
	}
}

export default card
