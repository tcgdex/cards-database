import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Pignite",
		fr: "Grotichon",
		es: "Pignite",
		it: "Pignite",
		pt: "Pignite",
		de: "Ferkokel"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		499,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Tepig",
		fr: "Gruikui",
		de: "Floink"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				de: "Walzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flamme",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "When its internal fire flares up, its movements grow sharper and faster. When in trouble, it emits smoke.",
		de: "Lodert das Feuer in ihm auf, bewegt es sich geschmeidiger und schneller. Bei Gefahr lässt es ordentlich Dampf ab."
	},

	thirdParty: {
		cardmarket: 279755,
		tcgplayer: 88061
	}
}

export default card
