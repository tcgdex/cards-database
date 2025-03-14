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
	trainerType: 'Technical Machine',
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach this card to 1 of your {G} Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Fire Cube 01.",
		fr: "Attachez cette carte à l'un de vos Pokémon {G} en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne. À la fin de votre tour, défaussez-vous de Cube de plante 01.",
		de: "Lege diese Karte an 1 deiner -Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seiner eigenen verwenden. Lege am Ende deines Zuges Gras-Würfel 01 auf deinen Ablagestapel."
	},

	attacks: [{
		name: {
			fr: "Poison dodo",
			en: "Sleep Poison",
			de: "Schlafgift"
		},

		effect: {
			en: "The Defending Pokémon is now Asleep and Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
			de: "Das Verteidigende Pokémon ist jetzt vergiftet und schläft."
		},

		cost: ["Grass"]
	}]
}

export default card
