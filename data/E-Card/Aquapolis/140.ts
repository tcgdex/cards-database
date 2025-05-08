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
		en: "Attach this card to 1 of your Water Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discord Water Cube 01.",
		fr: "Attachez cette carte à l'un de vos Pokémon  en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne. À la fin de votre tour, défaussez-vous de Cube d'eau 01.",
		de: "Lege diese Karte an 1 deiner -Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seiner eigenen verwenden. Lege am Ende deines Zuges Wasser-Würfel 01 auf deinen Ablagestapel."
	},

	attacks: [{
		name: {
			en: "Splatter",
			fr: "Crépitement",
			de: "Verspritzer"
		},

		effect: {
			en: "Choose 1 of your oppenent's Pokémon. This attack does 20 damage to that Pokémon. Don't apply Weakness or Resistance.",
			fr: "Choisissez un des Pokémon de votre adversaire. Cette attaque inflige 20 dégâts à ce Pokémon. N'appliquez ni la Faiblesse, ni la Résistance.",
			de: "Wähle 1 der Pokémon deines Gegners. Dieser Angriff fügt diesem Pokémon 20 Schadenspunkte zu. Wende Schwäche und Resistenz nicht an."
		},

		cost: ["Water"]
	}]
}

export default card
