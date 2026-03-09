import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Stantler",
		fr: "Stantler"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		234,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Lead",
				fr: "Avance"
			},
			effect: {
				en: "Search your deck for a Supporter card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Supporter, montrez-la à votre adversaire, puis ajoutez-la à votre main. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frighten Horn",
				fr: "Corne qui fait peur"
			},
			effect: {
				en: "If the Defending Pokémon isn’t an Evolved Pokémon, that Pokémon is now Confused.",
				fr: "Si le Pokémon Défenseur n'est pas un Pokémon Évolué, il est maintenant Confus."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	description: {
		en: "Staring at its antlers creates an odd sensation as if one were being drawn into their centers."
	},

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278041,
		tcgplayer: 89505
	}
}

export default card
