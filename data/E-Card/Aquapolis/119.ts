import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Darkness Cube 01",
		fr: "Cube d'obscurité 01",
		de: "Unlicht Würfel 01"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Attachez cette carte à l'un de vos Pokémon  en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne. À la fin de votre tour, défaussez-vous de Cube d'obscurité 01.",
		de: "Lege diese Karte an 1 deiner  -Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seiner eigenen verwenden. Lege am Ende deines Zuges Unlicht-Würfel 01 auf deinen Ablagestapel."
	},

	attacks: [{
		name: {
			de: "Plunder"
		},

		damage: 10,

		effect: {
			de: "Before doing damage, discard any Trainer cards attached to the Defending Pokémon."
		},

		cost: ["Darkness"]
	}],

	thirdParty: {
		cardmarket: 275195,
		tcgplayer: 84675
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
