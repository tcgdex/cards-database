import { Card } from '../../../interfaces'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		en: "Shuckle",
		fr: "Caratroc"
	},
	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		213,
	],
	hp: 60,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fermenting Liquid",
				fr: "Liquide fermenté"
			},
			effect: {
				en: "Whenever you attach an Energy card from your hand to Shuckle, draw a card.",
				fr: "Lorsque vous attachez une carte Énergie de votre main à Caratroc, piochez une carte."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Shell Stunner",
				fr: "Carafrappe"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Shuckle by attacks during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à Caratroc par des attaques pendant le prochain tour de votre adversaire."
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

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
