import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Murkrow",
		fr: "Cornèbre",
		es: "Murkrow",
		it: "Murkrow",
		pt: "Murkrow",
		de: "Kramurx"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		198,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
				de: "Schnabel"
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-Aile",
				de: "Flügelschlag"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "If spotted, it will lure an unwary person into chasing it, then lose the pursuer on mountain trails.",
		de: "Wird es entdeckt, lockt es seinen Verfolger auf eine Jagd in die Berge, wo es ihn dann abschüttelt."
	},

	thirdParty: {
		cardmarket: 280511,
		tcgplayer: 87657
	}
}

export default card
