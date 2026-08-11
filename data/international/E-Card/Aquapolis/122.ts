import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Fire Cube 01",
		'fr-fr': "Cube de feu 01",
		'de-de': "Feuer-Würfel 01"
	},

	illustrator: '"Big Mama" Tagawa"',
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Attach this card to 1 of your Fire Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Fire Cube 01.",
		'fr-fr': "Attachez cette carte à l'un de vos Pokémon  en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne. À la fin de votre tour, défaussez-vous de Cube de feu 01.",
		'de-de': "Lege diese Karte an 1 deiner -Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seiner eigenen verwenden. Lege am Ende deines Zuges Feuer-Würfel 01 auf deinen Ablagestapel."
	},

	attacks: [
		{
			name: {
				'en-us': "Singe",
				'de-de': "Versengung",
				'fr-fr': "Roussir"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verbrannt.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé."
			},
			cost: [
				"Fire",
			]
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85451,
				cardmarket: 275198
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85451,
				cardmarket: 275198
			}
		},
	]
}

export default card
