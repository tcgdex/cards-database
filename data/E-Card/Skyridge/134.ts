import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Mystery Plate Beta",
		de: "Geheimnis-Schild ß"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	attacks: [{
		name: {
			de: "Steinbrecher"
		},

		effect: {
			de: "Hat dein Gegner 5 oder mehr Preise, ziehe 3 Karten. Hat dein Gegner nur 1 Preis, wähle 2 Energiekarten, die an das verteidigende Pokémon angelegt sind (1, falls es nur 1 hat). Dein Gegner mischt diese Karten in sein Deck."
		},

		cost: ["Colorless"]
	}],

	effect: {
		de: "Lege diese Karte an 1 deiner Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seines eigenen verwenden. Lege am Ende deines Zuges das Geheimnis-Schild ß auf deinen Ablagestapel."
	},

	thirdParty: {
		tcgplayer: 87671
	}
}

export default card
