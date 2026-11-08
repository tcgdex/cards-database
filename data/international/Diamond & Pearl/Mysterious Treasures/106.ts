import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Totodile",
		'fr-fr': "Kaiminus",
		'de-de': "Karnimani"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		158,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Biss"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Shining Fang",
				'fr-fr': "Croc brillant",
				'de-de': "Blitzende Reißzähne"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wenn bereits Schadensmarken auf dem Verteidigenden Pokémon liegen, fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It has the habit of biting anything with its developed jaws. Even its Trainer need to be careful.",
		'fr-fr': "Il broie tout ce qu'il trouve avec ses mâchoires puissantes. Même son dresseur doit s'en méfier."
	},

	thirdParty: {
		cardmarket: 277735,
		tcgplayer: 89998
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
