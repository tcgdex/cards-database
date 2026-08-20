import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Giratina",
		fr: "Giratina",
		de: "Giratina"
	},

	illustrator: "Yusuke Ishikawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [487],

	hp: 110,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
				de: "Drachenklaue"
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Dragonbreath",
				fr: "Dracosouffle",
				de: "Feuerodem"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen. Bei „Kopf“ ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "It was banished for its violence. It silently gazed upon the old world from the Distortion World.",
		de: "Es wurde aufgrund seines Verhaltens verbannt. Aus der Zerrwelt schaut es auf die alte Welt."
	},

	variants: [		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85734,
				cardmarket: 278430
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				tcgplayer: 125078
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278430,
				tcgplayer: 85734
			}
		}
	],

}

export default card
