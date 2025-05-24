import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Technical Machine TS-1",
		fr: "Machine Technique TS-1",
		de: "Technische Maschine TS-1"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach this card to 1 of your Pokémon in play. That Pokémon may use this card's attack instead of its own.",
		fr: "Attachez cette carte à 1 de vos Pokémon en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne.",
		de: "Lege diese Karte an 1 deiner Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstelle seiner eigenen Angriffe benutzen."
	},

	trainerType: "Technical Machine",

	attacks: [{
		name: {
			en: "Evoluter",
			fr: "Évolutionneur",
			de: "Evoluter"
		},

		effect: {
			en: "Search your deck for a card that evolves from 1 of you Pokémon and put it onto that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck une carte évoluant d'1 de vos Pokémon et placez-la sur ce Pokémon. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck.",
			de: "Durchsuche dein Deck nach 1 Karte, die sich aus 1 deiner Pokémon entwickelt, und lege sie auf dieses Pokémon. (Dies zählt als Entwickeln von diesem Pokémon.) Mische dein Deck danach."
		}
	}]
}

export default card
