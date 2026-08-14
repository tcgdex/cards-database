import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Dwebble",
		fr: "Crabicoque",
		es: "Dwebble",
		it: "Dwebble",
		pt: "Dwebble",
		de: "Lithomith"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		557,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flail",
				fr: "Fléau",
				de: "Dreschflegel"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on this Pokémon.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
				de: "Dieser Angriff fügt 10 Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "When it finds a stone of a suitable size, it secretes a liquid from its mouth to open up a hole to crawl into.",
		de: "Sobald es einen angemessen großen Stein findet, höhlt es ihn mit einem ätzenden Sekret aus und kriecht hinein."
	},

	thirdParty: {
		cardmarket: 280671,
		tcgplayer: 85063
	}
}

export default card
