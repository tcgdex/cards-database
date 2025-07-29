import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Lightning Cube 01",
		fr: "Cube électrik 01",
		de: "Elektro-Würfel 01"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez cette carte à l'un de vos Pokémon  en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne. À la fin de votre tour, défaussez-vous de Cube électrik 01.",
		de: "Lege diese Karte an 1 deiner -Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seiner eigenen verwenden. Lege am Ende deines Zuges Elektro-Würfel 01 auf deinen Ablagestapel."
	},

	attacks: [{
		name: {
			de: "Discharge"
		},

		damage: "40x",

		effect: {
			de: "Discard all -Energy cards attached to this Pokémon. Then, flip a number of coins equal to the nuber of Energy cards discarded that way. This attack does 40 damage times the number of heads."
		},

		cost: ["Lightning"]
	}],

	thirdParty: {
		cardmarket: 275203
	}
}

export default card
