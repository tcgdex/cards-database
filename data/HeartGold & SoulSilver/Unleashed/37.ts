import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Poliwhirl",
		fr: "Tetarte",
		de: "Quaputzi"
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
		en: "Poliwag",
		fr: "Ptitard",
		de: "Quapsel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Hypnoblast",
				fr: "Hypnoblast",
				de: "Hypnoschuss"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Light Punch",
				fr: "Poing léger",
				de: "Leichter Hieb"
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
		en: "The skin on most of its body is moist. However, the skin on its belly spiral feels smooth.",
		de: "Der Großteil seiner Haut ist feucht. Dennoch ist die Haut um seine Spirale glatt und weich."
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
