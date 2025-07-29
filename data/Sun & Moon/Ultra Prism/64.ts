import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Cranidos",
		fr: "Kranidos",
		es: "Cranidos",
		it: "Cranidos",
		pt: "Cranidos",
		de: "Koknodon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		408,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Corkscrew Punch",
				fr: "Poing Tire-Bouchon",
				es: "Puño Tirabuzón",
				it: "Pugno Rotante",
				pt: "Soco Saca-rolha",
				de: "Korkenzieherhieb"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Headstrike",
				fr: "Coup de Tête",
				es: "Testarada",
				it: "Testata",
				pt: "Golpe de Cabeça",
				de: "Kopftreffer"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 315992
	}
}

export default card
