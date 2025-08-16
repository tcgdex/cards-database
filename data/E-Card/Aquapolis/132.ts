import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Psychic Cube 01",
		fr: "Cube psy 01",
		de: "Psycho-Würfel 01"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez cette carte à l'un de vos Pokémon  en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne. À la fin de votre tour, défaussez-vous de Cube psy 01.",
		de: "LLege diese Karte an 1 deiner -Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seiner eigenen verwenden. Lege am Ende deines Zuges Psycho-Würfel 01 auf deinen Ablagestapel."
	},

	attacks: [{
		name: {
			de: "Psy Confuse"
		},

		effect: {
			de: "The Defending Pokémon is now Confused."
		},

		cost: ["Psychic"]
	}],

	thirdParty: {
		cardmarket: 275208,
		tcgplayer: 88412
	}
}

export default card
