import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Celebi",
		'fr-fr': "Celebi",
	},

	illustrator: "Shin Nagasawa",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		251,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Leap Through Time",
				'fr-fr': "Bond Temporel"
			},
			effect: {
				'en-us': "When this Pokémon is Knocked Out, flip a coin. If heads, your opponent can't take a Prize card. Shuffle this Pokémon and all cards attached to it into your deck.",
				'fr-fr': "Lorsque ce Pokémon est mis K.O., lancez une pièce. Si c'est face, mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck, et votre adversaire ne peut pas récupérer de carte Récompense pour cette carte."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sparkle Mine",
				'fr-fr': "Stop Θ",
			},
			effect: {
				'en-us': "Put 1 damage counter on each of your opponent's Pokémon.",
				'fr-fr': "Placez 1 marqueur de dégâts sur chacun des Pokémon de votre adversaire."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has the power to travel across time, but it is said to appear only in peaceful times.",
	},

	thirdParty: {
		cardmarket: 553429
	}
}

export default card
