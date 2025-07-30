import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Water Cube 01",
		fr: "Cube d'eau 01",
		de: "Wasser-Würfel 01"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez cette carte à l'un de vos Pokémon  en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne. À la fin de votre tour, défaussez-vous de Cube d'eau 01.",
		de: "Lege diese Karte an 1 deiner -Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seiner eigenen verwenden. Lege am Ende deines Zuges Wasser-Würfel 01 auf deinen Ablagestapel."
	},

	attacks: [{
		name: {
			de: "Verspritzer"
		},

		effect: {
			de: "Wähle 1 der Pokémon deines Gegners. Dieser Angriff fügt diesem Pokémon 20 Schadenspunkte zu. Wende Schwäche und Resistenz nicht an."
		},

		cost: ["Water"]
	}],

	thirdParty: {
		cardmarket: 275216,
		tcgplayer: 90500
	}
}

export default card
