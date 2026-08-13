import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Golett",
		fr: "Gringolem",
		es: "Golett",
		it: "Golett",
		pt: "Golett",
		de: "Golbit"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		622,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Nap",
				fr: "Tit'Sieste",
				de: "Nickerchen"
			},
			effect: {
				en: "Heal 40 damage from this Pokémon.",
				fr: "Soignez 40 dégâts à ce Pokémon.",
				de: "Heile 40 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras'Face",
				de: "Pfund"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "The energy that burns inside it enables it to move, but no one has yet been able to identify this energy.",
		de: "Es wird durch eine Energie angetrieben, die seinem Körper entspringt. Keiner weiß jedoch, woher diese Energie stammt."
	},

	thirdParty: {
		cardmarket: 280497,
		tcgplayer: 85833
	}
}

export default card
