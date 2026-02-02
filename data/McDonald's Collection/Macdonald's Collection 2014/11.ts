import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2014'

const card: Card = {
	dexId: [
		661,
	],
	illustrator: "5ban Graphics",
	description: {
		en: "These friendly Pokémon send signals to one another with beautiful chirps and tail-feather movements."
	},
	set: Set,
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},
	name: {
		en: "Fletchling",
		fr: "Passerouge",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: [
		"Colorless",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110416,
	},
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Razor Wind",
				fr: "Coupe-Vent",
			},
			damage: "20",
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 1,
}

export default card
