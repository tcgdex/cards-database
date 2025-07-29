import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Grass Cube 01",
		fr: "Cube de plante 01",
		de: "Gras-Würfel 01"
	},

	illustrator: "\"Big Mama\" Tagawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez cette carte à l'un de vos Pokémon  en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne. À la fin de votre tour, défaussez-vous de Cube de plante 01.",
		de: "Lege diese Karte an 1 deiner -Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seiner eigenen verwenden. Lege am Ende deines Zuges Gras-Würfel 01 auf deinen Ablagestapel."
	},

	attacks: [{
		name: {
			de: "Schlafgift"
		},

		effect: {
			de: "Das Verteidigende Pokémon ist jetzt vergiftet und schläft."
		},

		cost: ["Grass"]
	}],

	thirdParty: {
		cardmarket: 275200
	}
}

export default card
