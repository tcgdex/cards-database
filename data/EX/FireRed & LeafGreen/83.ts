import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Squirtle",
		fr: "Carapuce",
		de: "Schiggy"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		7,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bubble",
				fr: "Écume",
				de: "Bubble"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Smash Turn",
				fr: "Tour fracassant",
				de: "Smash Turn"
			},
			effect: {
				en: "After your attack, you may switch Squirtle with 1 of your Benched Pokémon.",
				fr: "Après votre attaque, vous pouvez échanger Carapuce avec 1 des Pokémon de votre Banc.",
				de: "After your attack, you may switch Squirtle with 1 of your Benched Pokémon."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276258,
		tcgplayer: 89490
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		},
		{
			type: "normal",
			stamp: ["hiroki-yano"]
		}
	]
}

export default card
