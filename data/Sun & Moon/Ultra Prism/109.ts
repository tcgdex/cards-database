import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Purugly",
		fr: "Chaffreux",
	},
	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		432,
	],
	hp: 110,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Glameow",
		fr: "Chaglam",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Own the Place",
				fr: "Propriétaire des Lieux",
			},
			effect: {
				en: "If your opponent has a Stadium card in play, discard it. If you do, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				fr: "Si votre adversaire a une carte Stade en jeu, défaussez-la. Dans ce cas, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Toss Aside",
				fr: "Rejeter",
			},
			effect: {
				en: "Discard random cards from your opponent's hand until they have 3 cards in their hand.",
				fr: "Défaussez au hasard des cartes de la main de votre adversaire jusqu’à ce qu’il ait 3 cartes dans sa main.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
