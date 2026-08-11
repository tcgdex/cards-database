import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Poliwhirl",
		'fr-fr': "Tetarte",
		'de-de': "Quaputzi"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [61],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Poliwag",
		'fr-fr': "Ptitard"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Hypnoblast",
				'fr-fr': "Hypnoblast",
				'de-de': "Hypnoschuss"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Light Punch",
				'fr-fr': "Poing léger",
				'de-de': "Leichter Hieb"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The skin on most of its body is moist. However, the skin on its belly spiral feels smooth."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88268,
				cardmarket: 279193
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88268,
				cardmarket: 279193
			}
		},
		{
			type: "reverse",
			foil: "league",
			thirdParty: {
				cardmarket: 450133,
				tcgplayer: 231416
			}
		},
		{
			type: "reverse",
			foil: "league",
			stamp: ["staff"],
			thirdParty: {
				tcgplayer: 231417
			}
		},
	],

}

export default card
