import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Steven's Advice",
		fr: "Les conseils de Pierre",
		de: "Troys Rat"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nVous pouvez piocher un nombre de cartes égal au nombre de Pokémon en jeu de votre adversaire. Si vous possédez au moins 7 cartes (celle-ci incluse) dans votre main, vous ne pouvez pas jouer cette carte.",
		de: "Ziehe so viele Karten, wie dein Gegner Pokémon im Spiel hat.\nWenn du 7 oder mehr Karten (inklusive dieser Karte) auf der Hand hast, kannst du diese Karte nicht spielen."
	}
}

export default card
