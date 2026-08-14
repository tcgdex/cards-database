import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Tynamo",
		fr: "Anchwatt",
		es: "Tynamo",
		it: "Tynamo",
		pt: "Tynamo",
		de: "Zapplardin"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		602,
	],

	hp: 30,

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
				en: "Razor Fin",
				fr: "Aileron-Rasoir",
				de: "Rasierflosse"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "One alone can emit only a trickle of electricity, so a group of them gathers to unleash a powerful electric shock.",
		de: "Alleine erzeugen sie nur geringe Mengen an Elektrizität, aber im Schwarm können sie mächtige Stromsalven abfeuern."
	},

	thirdParty: {
		cardmarket: 281052,
		tcgplayer: 90097
	}
}

export default card
