import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Mystery Plate Delta",
		de: "Geheimnis-Schild (Delta)"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	attacks: [{
		name: {
			en: "Healing Oasis",
			de: "Heilungsoase"
		},

		effect: {
			en: "If your opponent has 5 or more Prizes, search your deck for up to 3 basic Energy cards, show them to your opponent, and put them into your hand, Shuffle your deck afterward. If your opponent has exactly 2 Prizes, remove all damage counters from 1 of your Pokémon.",
			de: "Hat dein Gegner 5 oder mehr Preise, durchsuche dein Deck nach bis zu 3 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische dein Deck danach. Hat dein Gegner 2 Preise, entferne alle Schadensmarken von 1 deiner Pokémon."
		},

		cost: ["Colorless"]
	}],

	effect: {
		en: "Attach this card to 1 of your Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Mystry Plate Delta",
		de: "Lege diese Karte an 1 deiner Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seines eigenen verwenden. Lege am Ende deines Zuges das Geheimnis Schild S auf deinen Ablagestapel."
	}
}

export default card
