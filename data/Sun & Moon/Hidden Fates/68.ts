import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Jessie & James",
		fr: "Jessie et James",
		de: "Jessie & James"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Chaque joueur défausse 2 cartes de sa main. Votre adversaire défausse en premier.",
		en: "Each player discards 2 cards from their hand. Your opponent discards first.",
		de: "Jeder Spieler legt 2 Karten aus seiner Hand auf seinen Ablagestapel. Dein Gegner legt als Erster ab. Du kannst während deines Zuges (bevor du angreifst) nur 1 Unterstützerkarte spielen."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 396682,
		tcgplayer: 197732
	}
}

export default card
