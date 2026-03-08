import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Poochyena",
		fr: "Medhyena de Team Magma",
		de: "Team Magmas Fiffyen"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		261,
	],

	hp: 50,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Darkness Call",
				fr: "Demande d'Obscurité",
				de: "Darkness Call"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc, s'il en a.",
				de: "Your opponent switches the Defending Pokémon with 1 of this or her Benched Pokémon, if any."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
				fr: "Croc aiguisé",
				de: "Sharp Fang"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276042,
		tcgplayer: 89839
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
