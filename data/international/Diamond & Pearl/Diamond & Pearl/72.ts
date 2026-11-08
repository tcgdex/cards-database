import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Buizel",
		'fr-fr': "Mustébouée",
		'de-de': "Bamelin"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		418,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Splash About",
				'fr-fr': "Grosse trempette",
				'de-de': "Herumspritzen"
			},
			effect: {
				'en-us': "If Buizel has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Si Mustébouée possède moins d'Énergies que le Pokémon Défenseur, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wenn an das Verteidigende Pokémon mehr Energie angelegt ist als an Bamelin, fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
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
		'en-us': "It has a flotation sac that is like an inflatable collar. It floats on water with its head out.",
		'fr-fr': "Sa bouée est pareille à un collier gonflable. Quand il flotte, il garde la tête à l'air libre."
	},

	thirdParty: {
		cardmarket: 277571,
		tcgplayer: 84015
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
