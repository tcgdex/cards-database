import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Metal Cube 01",
		fr: "Cube de métal 01",
		de: "Metall-Würfel 01"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez cette carte à l'un de vos Pokémon  en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne. À la fin de votre tour, défaussez-vous de Cube de métal 01.",
		de: "Lege diese Karte an 1 deiner -Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seiner eigenen verwenden. Lege am Ende deines Zuges Metall-Würfel 01 auf deinen Ablagestapel."
	},

	attacks: [{
		name: {
			de: "Metall-Umkehrung"
		},

		damage: 10,

		effect: {
			de: "Bevor Schaden zugefügt wird, kannst du 1 der Pokémon auf der Bank deines Gegners wählen und es mit dem Verteidigenden Pokémon austauschen."
		},

		cost: ["Metal"]
	}],

	thirdParty: {
		cardmarket: 275205,
		tcgplayer: 87348
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
