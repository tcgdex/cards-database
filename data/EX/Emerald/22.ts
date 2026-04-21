import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Breloom",
		fr: "Chapignon",
		de: "Kapilz"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		286,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Power Blow",
				fr: "Coup puissant",
				de: "Power Blow"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage for each Energy attached to Breloom.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Chapignon.",
				de: "Does 10 damage plus 10 more damage for each Energy attached to Breloom"
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Body Slam",
				fr: "Plaquage",
				de: "Body Slam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. if heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 83956,
		cardmarket: 276533
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
