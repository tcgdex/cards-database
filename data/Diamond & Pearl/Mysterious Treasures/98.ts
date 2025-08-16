import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Shinx",
		fr: "Lixy",
		de: "Sheinux"
	},

	illustrator: "Lee HyunJung",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		403,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Plasma",
				fr: "Plasma",
				de: "Plasma"
			},
			effect: {
				en: "Flip a coin. If heads, search your discard pile for a Lightning Energy card and attach it to Shinx.",
				fr: "Lancez une pièce. Si c'est face, choisissez dans votre pile de défausse une carte Énergie Lightning et attachez-la à Lixy.",
				de: "Wirf 1 Münze. bei 'Kopf' durchsuche deinen Ablagestapel nach einer -Energiekarte und lege sie an Sheinux an."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 277727,
		tcgplayer: 89173
	}
}

export default card
