import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Fighting Cube 01",
		fr: "Cube de combat 01",
		de: "Kampf-Würfel 01"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez cette carte à l'un de vos Pokémon  en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne. À la fin de votre tour, défaussez-vous de Cube de combat 01.",
		de: "Lege diese Karte an 1 deiner -Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seiner eigenen verwenden. Lege am Ende deines Zuges Kampf-Würfel 01 auf deinen Ablagestapel."
	},

	attacks: [{
		name: {
			de: "Rasende Wut"
		},

		damage: "10x",

		effect: {
			de: "Wirf so viele Münzen, wie Schadensmarken auf diesem Pokémon liegen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
		},

		cost: ["Fighting"]
	}],

	thirdParty: {
		cardmarket: 275197
	}
}

export default card
