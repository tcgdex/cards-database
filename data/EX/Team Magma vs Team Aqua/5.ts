import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Sharpedo",
		fr: "Sharpedo de Team Aqua",
		de: "Team Aquas Tohaido"
	},

	illustrator: "Katsura Tabata",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		319,
	],

	hp: 70,

	types: [
		"Water",
		"Darkness",
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rage",
				fr: "Frénésie",
				de: "Rage"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on Team Aqua's Sharpedo.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Sharpedo de Team Aqua.",
				de: "Does 10 damage plus 10 more damage for each damage counter on Team Aqua's Sharpedo."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Slash",
				fr: "Aqua-tranche",
				de: "Aqua Slash"
			},
			effect: {
				en: "Team Aqua's Sharpedo can't attack during your next turn.",
				fr: "Sharpedo de Team Aqua ne peut pas attaquer lors de votre prochain tour.",
				de: "Team Aqua's Sharpedo can't attack during your next turn."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 275982,
		tcgplayer: 89799
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
