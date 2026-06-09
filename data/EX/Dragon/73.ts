import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Spoink",
		fr: "Spoink",
		de: "Spoink"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		325,
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
				en: "Bounce",
				fr: "Faire des bonds",
				de: "Sprungfeder"
			},
			effect: {
				en: "After your attack, you may switch Spoink with 1 of your Benched Pokémon.",
				fr: "Après votre attaque, vous pouvez échanger Spoink avec un des Pokémon de votre Banc.",
				de: "Nach deinem Angriff kannst du Spoink gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 10,

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
		tcgplayer: 89470,
		cardmarket: 275950
	}
}

export default card
