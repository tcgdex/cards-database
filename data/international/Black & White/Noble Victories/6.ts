import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Dwebble",
		'fr-fr': "Crabicoque",
		'es-es': "Dwebble",
		'it-it': "Dwebble",
		'pt-br': "Dwebble",
		'de-de': "Lithomith"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		557,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Withdraw",
				'fr-fr': "Repli",
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The Pokémon can easily melt holes in hard rocks with a liquid secreted from its mouth.",
	},

	thirdParty: {
		cardmarket: 280129,
		tcgplayer: 85061
	}
}

export default card
