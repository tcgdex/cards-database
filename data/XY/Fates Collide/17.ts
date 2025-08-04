import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Omanyte",
		fr: "Amonita",
		es: "Omanyte",
		it: "Omanyte",
		pt: "Omanyte",
		de: "Amonitas"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		138,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "RESTORED",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				es: "Pistola Agua",
				it: "Pistolacqua",
				pt: "Revolver d'Água",
				de: "Aquaknarre"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	evolveFrom: {
		en: "Helix Fossil Omanyte",
		fr: "Fossile Nautile Amonita",
		es: "Fósil Hélix Omanyte",
		it: "Helixfossile di Omanyte",
		pt: "Fóssil Espiral de Omanyte",
		de: "Helixfossil Amonitas"
	},

	thirdParty: {
		cardmarket: 289843,
		tcgplayer: 117779
	}
}

export default card
