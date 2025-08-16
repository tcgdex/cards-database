import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Léviator",
		de: "Garados"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Splash",
				fr: "Hydro-éclaboussure",
				de: "Hydroplatscher"
			},

			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Beam",
				fr: "Ultralaser",
				de: "Hyperstrahl"
			},
			effect: {
				en: "Discard an Energy card attached to the Defending Pokémon.",
				fr: "Défaussez-vous d’une carte Énergie attachée au Pokémon Défenseur.",
				de: "Lege 1 Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		en: "Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it."
	},

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278976,
		tcgplayer: 85992
	}
}

export default card
