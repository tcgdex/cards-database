import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Croconaw",
		fr: "Crocrodil obscur",
		de: "Dunkles Tyracroc"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		159,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Totodile",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],

			name: {
				en: "Clamping Jaw",
				fr: "Gouffre",
				de: "Clamping Jaw"
			},

			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn. If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing. (Benching either Pokémon ends this effect.)",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire. Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque ne fait rien. (Si l'un des deux Pokémon bat en retraite, cet effet prend fin.)",
				de: "The Defending Pokémon can't retreat during your opponent's next turn. If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing. (Benching either Pokémon ends this effect.)"
			},

			damage: 20
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Il a 49 dents dans sa gueule qui se régénèrent constamment. Arrachez-en une et une nouvelle pousse à sa place."
	},

	thirdParty: {
		cardmarket: 274684,
		tcgplayer: 84578
	}
}

export default card
