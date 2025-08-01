import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Multi Technical Machine 01",
		fr: "Machine multi-technique 01",
		de: "Vielzweckmaschine 01"
	},

	illustrator: "\"Big Mama\" Tagawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez cette carte à l'un de vos Pokémon en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne. À la fin de votre tour, défaussez-vous de Machine multi-technique 01.",
		de: "Lege diese Karte an 1 deiner Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seiner eigenen verwenden. Lege am Ende deines Zuges Vielzweckmaschine 01 auf deinen Ablagestapel."
	},

	attacks: [{
		name: {
			de: "Lähmender Blick"
		},

		effect: {
			de: "Das Verteidigende Pokémon ist jetzt gelähmt."
		},

		cost: ["Colorless"]
	}],

	thirdParty: {
		cardmarket: 275019
	}
}

export default card
