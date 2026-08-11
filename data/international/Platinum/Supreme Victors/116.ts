import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Mudkip",
		'fr-fr': "Gobou",
		'de-de': "Hydropi"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [258],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Mud Sport",
				'fr-fr': "Lance-boue",
				'de-de': "Lehmsuhler"
			},
			effect: {
				'en-us': "If Mudkip has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Si Gobou possède moins d'Énergie que le Pokémon Défenseur, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wenn an das Verteidigende Pokémon mehr Energie angelegt ist als an Hydropi, fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf",
				'de-de': "Surfer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+10"
		},
	],
	retreat: 1,

	description: {
		'en-us': "To alert it, the fin on its head senses the flow of water. It has the strength to heft boulders."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87615,
				cardmarket: 278807
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278807,
				tcgplayer: 87615
			}
		},
	],

}

export default card
