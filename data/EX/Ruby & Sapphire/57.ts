import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Makuhita",
		fr: "Makuhita",
		de: "Makuhita"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [296],

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
				en: "Fling",
				fr: "Lancer",
				de: "Austoben"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur contre un des Pokémon de son Banc.",
				de: "Dein Gegner tauscht sein Aktives Pokémon gegen 1 seiner Pokémon auf der Bank aus."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Low Kick",
				fr: "Balayage",
				de: "Kick"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [{
		type: "normal",
		thirdParty: {
			cardmarket: 275705,
			tcgplayer: 87126
		}
	},
	{
		type: "reverse",
		thirdParty: {
			tcgplayer: 87126
		}
	},
	{
		type: "normal",
		subtype: "no-e-reader",
		thirdParty: {
			tcgplayer: 125142
		}
	}
	],

}

export default card
