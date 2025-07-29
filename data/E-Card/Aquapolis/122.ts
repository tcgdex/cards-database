import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Fire Cube 01",
		fr: "Cube de feu 01",
		de: "Feuer-Würfel 01"
	},

	illustrator: "\"Big Mama\" Tagawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez cette carte à l'un de vos Pokémon  en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne. À la fin de votre tour, défaussez-vous de Cube de feu 01.",
		de: "Lege diese Karte an 1 deiner -Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seiner eigenen verwenden. Lege am Ende deines Zuges Feuer-Würfel 01 auf deinen Ablagestapel."
	},

	attacks: [{
		name: {
			de: "Versengung"
		},

		effect: {
			de: "Das Verteidigende Pokémon ist jetzt verbrannt."
		},

		cost: ["Fire"]
	}],

	thirdParty: {
		cardmarket: 275198
	}
}

export default card
