import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Espurr",
		fr: "Psystigri",
		de: "Psiau"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		677,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Twinkle",
				fr: "Étincellement",
				de: "Funkeln"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "My number one. Exceptionally cute. A little princess.",
		de: "Meine Nummer eins. Außergewöhnlich niedlich. Eine kleine Prinzessin."
	},

	thirdParty: {
		cardmarket: 288523
	}
}

export default card
