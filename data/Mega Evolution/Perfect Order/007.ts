import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Scatterbug",
		fr: "Lépidonille",
		es: "Scatterbug",
		de: "Purmel",
		it: "Scatterbug",
		pt: "Scatterbug"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		664
	],
	hp: 40,
	types: [
		"Grass"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Grass"
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
				es: "Roer",
				de: "Nagen",
				it: "Rosicchiamento",
				pt: "Roída"
			},
			damage: "20"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "OKACHEKE",
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],
	thirdParty: {
		tcgplayer: 684363,
		cardmarket: 877419
	}
}

export default card
