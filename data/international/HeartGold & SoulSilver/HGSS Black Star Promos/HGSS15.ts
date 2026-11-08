import { Card } from 'models/database/card'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Shuckle",
		'fr-fr': "Caratroc"
	},
	illustrator: "match",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [213],
	hp: 60,
	types: [
		"Fighting"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Fermenting Liquid",
				'fr-fr': "Liquide fermenté"
			},
			effect: {
				'en-us': "Whenever you attach an Energy card from your hand to Shuckle, draw a card.",
				'fr-fr': "Lorsque vous attachez une carte Énergie de votre main à Caratroc, piochez une carte."
			}
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Shell Stunner",
				'fr-fr': "Carafrappe"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to Shuckle by attacks during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à Caratroc par des attaques pendant le prochain tour de votre adversaire."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It stores berries inside its shell. To avoid attacks, it hides beneath rocks and remains completely still."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275598,
				tcgplayer: 89193
			}
		},
	],

}

export default card
