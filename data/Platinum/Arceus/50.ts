import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Wormadam Sandy Cloak",
		de: "Burmadame Sandumhang"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		413,
	],
	
	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Burmy Sandy Cloak",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Hang Down",
				de: "Herunterhängen"
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
				en: "Cloak Headbutt",
				de: "Umhang-Kopfnuss"
			},
			effect: {
				en: "If you have Wormadam Trash Cloak in play, this attack does 60 damage plus 30 more damage.",
				de: "Wenn du Burmadame Lumpenumhang im Spiel hast, fügt dieser Angriff 60 Schadenspunkte plus 30 weitere Schadenspunkte zu."
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

	thirdParty: {
		cardmarket: 278922,
		tcgplayer: 90644
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
