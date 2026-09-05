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

	illustrator: "Kouki Saitou",
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
			],
			name: {
				en: "Flame Charge",
				fr: "Nitrocharge",
				de: "Nitroladung"
			},
			effect: {
				en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 1 {R}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Heat Crash",
				fr: "Tacle Feu",
				de: "Brandstempel"
			},

			damage: 50,

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
		tcgplayer: 88060
	}
}

export default card
