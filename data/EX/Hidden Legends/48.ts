import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Spinda",
		fr: "Spinda",
		de: "Pandir"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		327,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "The Hula-la",
				fr: "Danse-folle",
				de: "The Hula-la"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, both the Defending Pokémon and Spinda are now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus. Si c'est pile, le Pokémon Défenseur et Spinda sont maintenant Confus.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, both the Defending Pokémon and Spinda are now Confused."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flail",
				fr: "Fléau",
				de: "Flail"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Spinda.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Spinda.",
				de: "Does 10 damage times the number of damage counters on Spinda."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276122,
		tcgplayer: 89459
	},

	variants: [
		{
			type: "normal",
		}, {
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
