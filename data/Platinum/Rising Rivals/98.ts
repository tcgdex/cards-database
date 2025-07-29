import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Volkner's Philosophy",
		fr: "La Philosophie de Tanguy",
		de: "Volkners Philosophie"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		de: "Du kannst 1 Karte von deiner Hand auf deinen Ablagestapel legen. Danach ziehe so viele Karten, bis du 6 Karten auf der Hand hast. (Wenn du keine Karten ziehen kannst, kannst du diese Karte nicht spielen.)"
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278672
	}
}

export default card
