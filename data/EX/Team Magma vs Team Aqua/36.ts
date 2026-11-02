import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Lairon",
		fr: "Galegon de Team Magma",
		de: "Team Magmas Stollrak"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [305],

	hp: 70,

	types: [
		"Fighting"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
				de: "Nagen"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Land Sonic",
				fr: "Terre sonique",
				de: "Landschall"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Confused.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, il est maintenant Confus.",
				de: "Wenn bereits Schadensmarken auf dem Verteidigenden Pokémon liegen, ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275813,
				tcgplayer: 89834
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275813,
				tcgplayer: 89834
			}
		},
	],

}

export default card
