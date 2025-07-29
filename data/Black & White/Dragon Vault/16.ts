import { Card } from '../../../interfaces'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		en: "Haxorus",
		fr: "Tranchodon",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		612,
	],

	hp: 140,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Fraxure",
		fr: "Incisache",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Axe Slugger",
				fr: "Cognée",
			},
			effect: {
				en: "If the Defending Pokémon is a Colorless Pokémon, this attack does 60 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon Colorless, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Pulse",
				fr: "Dracochoc",
			},
			effect: {
				en: "Discard the top card of your deck.",
				fr: "Défaussez la carte du dessus de votre deck.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281016
	}
}

export default card
