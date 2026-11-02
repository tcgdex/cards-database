import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Island Hermit",
		fr: "L'ermite de l'île",
		de: "Insel-Eremit"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Choose up to 2 of your Prize cards and put them face up. (These cards remain face up for the rest of the game.) Draw 2 cards.",
		fr: "Choisissez jusqu'à 2 de vos cartes Récompense et retournez-les. (Ces cartes restent retournées jusqu'à la fin de la partie.) Piochez 2 cartes.",
		de: "Wähle bis zu 2 deiner Preise und decke sie auf. (Diese Karten werden nicht wieder verdeckt.) Ziehe 2 Karten.",
	},

	thirdParty: {
		cardmarket: 277281,
		tcgplayer: 86291
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
