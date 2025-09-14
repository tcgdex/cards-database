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
			de: "Heilungsoase"
		},

		effect: {
			de: "Hat dein Gegner 5 oder mehr Preise, durchsuche dein Deck nach bis zu 3 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische dein Deck danach. Hat dein Gegner 2 Preise, entferne alle Schadensmarken von 1 deiner Pokémon."
		},

		cost: ["Colorless"]
	}],

	effect: {
		de: "Lege diese Karte an 1 deiner Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seines eigenen verwenden. Lege am Ende deines Zuges das Geheimnis Schild S auf deinen Ablagestapel."
	},

	thirdParty: {
		tcgplayer: 87672
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
