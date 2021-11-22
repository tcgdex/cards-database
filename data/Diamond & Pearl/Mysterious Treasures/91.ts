import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Nidoran♀",
		fr: "Nidoran♀"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		29,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille"
			},
			effect: {
				en: "Search your deck for Nidoran♂ or Nidoran♀ and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck Nidoran♂ ou Nidoran♀ et placez-le sur votre Banc. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poison Sting",
				fr: "Dard-venin"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	description: {
		fr: "Bien qu'il rechigne à se battre, une goutte du poison sécrété par ses piquants peut s'avérer fatale."
	}
}

export default card
