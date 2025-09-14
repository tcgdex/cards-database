import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Snorlax",
		fr: "Ronflex",
		de: "Relaxo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		143,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Munchlax",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Thick Skinned",
				fr: "Dur à cuire",
				de: "Dickhäuter"
			},
			effect: {
				en: "Snorlax can't become Asleep, Confused, Paralyzed, or Poisoned. This power can't be used if Snorlax is already Asleep, Confused, or Paralyzed.",
				fr: "Ronflex ne peut pas devenir Endormi, Confus, Paralysé ou Empoisonné. Ce pouvoir ne peut être utilisé si Ronflex est déjà Endormi, Confus ou Paralysé.",
				de: "Relaxo kann nicht in den Schlaf versetzt, verwirrt, gelähmt oder vergiftet weden. Diese Fähigkeit kann nicht eingesetzt werden, falls Relaxo scchläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Body Slam",
				fr: "Plaquage",
				de: "Bodyslam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei Kopf ist das verteidigende Pokémon jezt gelähmt."
			},
			damage: 30,

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

	description: {
		fr: "Très paresseux, il ne fait que manger et dormir. Plus il est gros, plus il devient fainéant."
	},

	thirdParty: {
		cardmarket: 273808,
		tcgplayer: 45122
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"]
		},
		{
			type: "holo",
			subtype: "missing-expansion-symbol",
		}
	],
}

export default card
