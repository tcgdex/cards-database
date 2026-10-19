import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		742,
	],
	set: Set,
	name: {
		en: "Cutiefly",
		fr: "Bombydou",
		de: "Wommel"
	},
	rarity: "None",
	category: "Pokemon",
	hp: 30,
	types: [
		"Fairy",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Fly Around",
				fr: "Papillonnement",
				de: "Herumfliegen"
			},
			damage: "10",
			effect: {
				en: "If any damage is done to this Pokémon by attacks during your opponent's next turn, flip a coin. If heads, prevent that damage.",
				fr: "Si des dégâts sont infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire, lancez une pièce. Si c'est face, évitez ces dégâts.",
				de: "Wirf 1 Münze, wenn diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken Schaden zugefügt wird. Verhindere diesen Schaden bei Kopf."
			},
		},
	],

	illustrator: "Hitoshi Ariga",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 301852,
				tcgplayer: 152690
			}
		}
	]
}

export default card

