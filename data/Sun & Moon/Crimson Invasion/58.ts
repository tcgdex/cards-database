import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Houndour",
		fr: "Malosse",
		es: "Houndour",
		it: "Houndour",
		pt: "Houndour",
		de: "Hunduster"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		228,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Rear Kick",
				fr: "Ruade",
				es: "Patada Trasera",
				it: "Retrocalcio",
				pt: "Chute Traseiro",
				de: "Rückwärtskick"
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Darkness Fang",
				fr: "Croc Obscur",
				es: "Colmillo de Oscuridad",
				it: "Oscurizanna",
				pt: "Presa Sombria",
				de: "Fänge der Dunkelheit"
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

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 311907,
		tcgplayer: 149081
	}
}

export default card
