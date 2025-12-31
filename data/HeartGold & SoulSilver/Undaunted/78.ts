import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Team Rocket’s Trickery",
		fr: "Fourberie de la Team Rocket",
		de: "Team Rockets Trickserei"
	},

	illustrator: "Takao Unno",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Piochez 2 cartes. Ensuite, votre adversaire défausse une carte de sa main.",
		en: "Draw 2 cards. Then, your opponent discards a card from his or her hand.",
		de: "Ziehe 2 Karten. Anschließend legt dein Gegner 1 seiner Handkarten auf seinen Ablagestapel."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	hp: 0
}

export default card
