import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge",
		'de-de': "Menki"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [56],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Extra Punch",
				'fr-fr': "Extra punch",
				'de-de': "Extrahieb"
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Pokémon LV.X, this attack does 10 damage plus 50 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon NIV.X, cette attaque inflige 10 dégâts plus 50 dégâts supplémentaires.",
				'de-de': "Falls das Verteidigende Pokémon ein Pokémon LV.X ist, fügt dieser Angriff 10 Schadenspunkte plus 50 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It lives in treetop colonies. If one becomes enraged, the whole colony rampages for no reason."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87175,
				cardmarket: 278803
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278803,
				tcgplayer: 87175
			}
		},
	],

}

export default card
