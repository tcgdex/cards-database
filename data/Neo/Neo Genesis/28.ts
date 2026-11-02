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
		fr: "Germignon",
		de: "Endivie"
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
				de: "Giftpuder"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt vergiftet."
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
				de: "Pollenschild"
			},
			effect: {
				en: "During your opponent's next turn, Bayleef can't become Asleep, Confused, Paralyzed, or Poisoned. (All other effects of attacks, Pokémon Powers, and Trainer cards still happen.)",
				fr: "Pendant le prochain tour de votre adversaire, Macronium ne peut pas devenir Endormir, Confus, Paralysé ou Empoisonné. (Tous les autres effets d'attaques, Pouvoir Pokémon et cartes Dresseur sont toujours actifs.)",
				de: "Während des nächsten gegnerischen Zugs kann Lorblatt nicht einschlafen oder verwirrt, gelähmt oder vergiftet werden. (Alle anderen Effekte von Angriffen, Pokémon-Power und Trainerkarten finden immer noch statt.)"
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
	retreat: 2,


	description: {
		en: "A spicy aroma emanates from around its neck. The aroma acts as a stimulant to restore health.",
		fr: "Un arôme épicé émane de son tour de cou. Cet arôme agit comme un stimulant réjuvénateur.",
		de: "Ein würziges Aroma strömt aus seiner Halsgegend. Das Aroma wirkt wie ein Belebungsmittel, um die Gesundheit wiederherzustellen."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274428,
				tcgplayer: 83743
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274428,
				tcgplayer: 83743
			}
		}
	]
}

export default card
