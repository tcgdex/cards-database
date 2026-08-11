import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Wormadam Sandy Cloak",
		'de-de': "Burmadame Sandumhang"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [413],
	
	hp: 90,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Burmy Sandy Cloak"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Hang Down",
				'de-de': "Herunterhängen"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cloak Headbutt",
				'de-de': "Umhang-Kopfnuss"
			},
			effect: {
				'en-us': "If you have Wormadam Trash Cloak in play, this attack does 60 damage plus 30 more damage.",
				'de-de': "Wenn du Burmadame Lumpenumhang im Spiel hast, fügt dieser Angriff 60 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When evolving, its body takes in surrounding materials. As a result, there are many body variations."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90644,
				cardmarket: 278922
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278922,
				tcgplayer: 90644
			}
		},
	],

}

export default card
