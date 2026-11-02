import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Baltoy",
		fr: "Balbuto",
		de: "Puppance"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [343],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rapid Spin",
				fr: "Tour rapide",
				de: "Turbodreher"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any. You switch Baltoy with 1 of your Benched Pokémon, if any.",
				fr: "Votre adversaire échange le Pokémon Défenseur contre un des Pokémon de son Banc, s'il en a. Vous échangez Balbuto contre un des Pokémon de votre Banc, si vous en avez.",
				de: "Falls dein Gegner mindestens 1 Pokémon auf der Bank hat, wählt er 1 von ihnen und tauscht es gegen das Verteidigende Pokémon aus. Falls du mindestens 1 Pokémon auf der Bank hast, tauschst du dann 1 von diesen gegen Puppance aus."
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

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275809,
				tcgplayer: 83709
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275809,
				tcgplayer: 83709
			}
		},
	],

}

export default card
