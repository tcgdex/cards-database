import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Darkness Cube 01",
		'fr-fr': "Cube d'obscurité 01",
		'de-de': "Unlicht Würfel 01"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Attach this card to 1 of your Darkness Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Darkness Cube 01.",
		'fr-fr': "Attachez cette carte à l'un de vos Pokémon  en jeu. Ce Pokémon peut utiliser l'attaque de cette carte à la place de la sienne. À la fin de votre tour, défaussez-vous de Cube d'obscurité 01.",
		'de-de': "Lege diese Karte an 1 deiner  -Pokémon im Spiel an. Dieses Pokémon kann den Angriff dieser Karte anstatt seiner eigenen verwenden. Lege am Ende deines Zuges Unlicht-Würfel 01 auf deinen Ablagestapel."
	},

	attacks: [
		{
			name: {
				'en-us': "Plunder",
				'de-de': "Plunder",
				'fr-fr': "Pillage"
			},
			damage: 10,
			effect: {
				'en-us': "Before doing damage, discard any Trainer cards attached to the Defending Pokémon.",
				'de-de': "Before doing damage, discard any Trainer cards attached to the Defending Pokémon.",
				'fr-fr': "Avant d'infliger les dégâts, défaussez toutes les cartes Dresseur attachées au Pokémon Défenseur."
			},
			cost: [
				"Darkness",
			]
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 84675,
				cardmarket: 275195
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 84675,
				cardmarket: 275195
			}
		},
	]
}

export default card
