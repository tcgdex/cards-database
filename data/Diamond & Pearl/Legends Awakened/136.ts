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
		fr: "Attachez cette carte à 1 de vos Pokémon en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne.",
		de: "Lege diese Karte an 1 deiner Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstelle seiner eigenen Angriffe benutzen."
	},

	trainerType: "Technical Machine",

	attacks: [{
		name: {
			de: "Evoluter"
		},

		effect: {
			de: "Durchsuche dein Deck nach 1 Karte, die sich aus 1 deiner Pokémon entwickelt, und lege sie auf dieses Pokémon. (Dies zählt als Entwickeln von diesem Pokémon.) Mische dein Deck danach."
		}
	}],

	thirdParty: {
		cardmarket: 278285,
		tcgplayer: 89853
	}
}

export default card
