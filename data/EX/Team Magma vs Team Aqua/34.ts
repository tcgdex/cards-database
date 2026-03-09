import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Houndoom",
		fr: "Démolosse de Team Magma",
		de: "Team Magmas Hundemon"
	},

	illustrator: "Ken Ikuji",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Target Scorch",
				fr: "Brûlure ciblée",
				de: "Target Scorch"
			},
			effect: {
				en: "If the Defending Pokémon has Team Aqua in its name, the Defending Pokémon is now Burned.",
				fr: "Si le nom du Pokémon Défenseur comporte Team Aqua, le Pokémon Défenseur est maintenant Brûlé.",
				de: "If the Defending Pokémon has Team Aqua in its name, the Defending Pokémon is now Burned."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Damage Burn",
				fr: "Dégâts brûlants",
				de: "Damage Burn"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				de: "If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 20 more damage."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275987,
		tcgplayer: 89829
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
