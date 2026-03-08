import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Dunsparce",
		fr: "Insolourdo",
		de: "Dummisel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		206,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Glare",
				fr: "Intimidation",
				de: "Giftblick"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fade Out",
				fr: "Faiblir",
				de: "Ausblenden"
			},
			effect: {
				en: "Return Dunsparce and all cards attached to it to your hand.",
				fr: "Reprenez Insolourdo et toutes les cartes qui lui sont attachées dans votre main.",
				de: "Nimm Dummisel und alle an es angelegten Karten auf deine Hand zurück."
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

	retreat: 1,

	description: {
		en: "When spotted, this Pokémon escapes backward by furiously boring into the ground with its tail."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 279013,
		tcgplayer: 85012
	}
}

export default card
