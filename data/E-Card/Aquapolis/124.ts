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
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach this card to 1 of your Grass Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Grass Cube 01.",
		fr: "Attachez cette carte à l'un de vos Pokémon {G} en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne. À la fin de votre tour, défaussez-vous de Cube de plante 01.",
		de: "Lege diese Karte an 1 deiner -Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seiner eigenen verwenden. Lege am Ende deines Zuges Gras-Würfel 01 auf deinen Ablagestapel."
	},

	attacks: [
		{
			name: {
				de: "Schlafgift",
				fr: "Poison dodo"
			},
			effect: {
				de: "Das Verteidigende Pokémon ist jetzt vergiftet und schläft.",
				fr: "Le Pokémon Défenseur est maintenant Endormi et Empoisonné."
			},
			cost: [
				"Grass",
			]
		},
	],

	thirdParty: {
		cardmarket: 275200,
		tcgplayer: 85868
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
