import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Holon Adventurer",
		fr: "Aventurier Holon",
		de: "Holon-Abenteurer"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nDéfaussez une carte de votre main. Si vous ne pouvez pas défausser de carte de votre main, vous ne pouvez pas jouer cette carte.\n\nPiochez 3 cartes. Si vous avez défaussé un Pokémon possédant le symbole δ, piochez 4 cartes.",
		de: "Lege 1 Karte von deiner Hand auf deinen Ablagestapel. Wenn du das nicht machen kannst, kannst du diese Karte nicht spielen.\n\nZiehe 3 Karten. Wenn du ein Pokémon, auf dem δ zu sehen ist, auf den Ablagestapel gelegt hast, ziehe stattdessen 4 Karten."
	},

	thirdParty: {
		cardmarket: 277055
	}
}

export default card
