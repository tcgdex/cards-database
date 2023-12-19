import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Holon Scientist",
		fr: "Scientifique Holon",
		de: "Holon-Wissenschaftler"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nDéfaussez une carte de votre main. Si vous ne pouvez pas défausser de carte de votre main, vous ne pouvez pas jouer cette carte.\n\nSi vous avez moins de cartes en main que votre adversaire, piochez des cartes jusqu'à ce que vous et votre adversaire ayez le même nombre de cartes en main.",
		de: "Lege 1 Karte von deiner Hand auf den Ablagestapel. Wenn du das nicht machen kannst, kannst du diese Karte nicht spielen.\n\nWenn du weniger Karten auf der Hand hast als dein Gegner, ziehe so viele Karten von deinem Deck, bis ihr beide die gleiche Anzahl Karten auf der Hand habt."
	}
}

export default card
