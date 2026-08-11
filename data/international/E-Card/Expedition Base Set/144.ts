import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Multi Technical Machine 01",
		'fr-fr': "Machine multi-technique 01",
		'de-de': "Vielzweckmaschine 01"
	},

	illustrator: '"Big Mama" Tagawa',
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Attach this card to 1 of your Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Multi Technical Machine 01.",
		'fr-fr': "Attachez cette carte à l'un de vos Pokémon en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne. À la fin de votre tour, défaussez-vous de Machine multi-technique 01.",
		'de-de': "Lege diese Karte an 1 deiner Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seiner eigenen verwenden. Lege am Ende deines Zuges Vielzweckmaschine 01 auf deinen Ablagestapel."
	},

	attacks: [
		{
			name: {
				'en-us': "Paralyzing Gaze",
				'de-de': "Lähmender Blick",
				'fr-fr': "Regard paralysant",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Paralyzed.",
				'de-de': "Das Verteidigende Pokémon ist jetzt gelähmt.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Paralysé.",
			},
			cost: [
				"Colorless",
			],
		},
	],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87635,
				cardmarket: 275019
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87635,
				cardmarket: 275019
			},
		},
	],
}

export default card
