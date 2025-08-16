import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [24],

	name: {
		en: "Arbok",
		fr: "Arbok",
		es: "Arbok",
		it: "Arbok",
		pt: "Arbok",
		de: "Arbok"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Ekans",
		fr: "Abo"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
				fr: "Croc Aiguisé",
				es: "Colmillo Afilado",
				it: "Zannaffilata",
				pt: "Presa Afiada",
				de: "Scharfe Fänge"
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Tail Snap",
				fr: "Coud' Queue Sec",
				es: "Pinza Cola",
				it: "Schioccacoda",
				pt: "Surpresa de Cauda",
				de: "Schweifhieb"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "After stunning its opponents with the pattern on its stomach, it quickly wraps them up in its body and waits for them to stop moving."
	},

	thirdParty: {
		cardmarket: 500025,
		tcgplayer: 223026
	}
}

export default card
