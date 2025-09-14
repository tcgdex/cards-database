import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Bayleef",
		fr: "Macronium",
		de: "Lorblatt"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		153,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Chikorita",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],

			name: {
				en: "Poisonpowder",
				fr: "Poudre toxik",
				de: "Poisonpowder"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Poisoned."
			},

			damage: 20
		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Pollen Shield",
				fr: "Bouclier pollen",
				de: "Pollen Shield"
			},
			effect: {
				en: "During your opponent's next turn, Bayleef can't become Asleep, Confused, Paralyzed, or Poisoned. (All other effects of attacks, Pokémon Powers, and Trainer cards still happen.)",
				fr: "Pendant le prochain tour de votre adversaire, Macronium ne peut pas devenir Endormir, Confus, Paralysé ou Empoisonné. (Tous les autres effets d'attaques, Pouvoir Pokémon et cartes Dresseur sont toujours actifs.)",
				de: "During your opponent's next turn, Bayleef can't become Asleep, Confused, Paralyzed, or Poisoned. (All other effects of attacks, Pokémon Powers, and Trainer cards still happen.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Un arôme épicé émane de son tour de cou. Cet arôme agit comme un stimulant réjuvénateur."
	},

	thirdParty: {
		cardmarket: 274428,
		tcgplayer: 83743
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card
