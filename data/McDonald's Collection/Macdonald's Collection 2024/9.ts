import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Umbreon",
		fr: "Noctali",
		es: "Umbreon",
		it: "Umbreon",
		pt: "Umbreon",
		de: "Nachtara"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [197],

	hp: 110,

	types: ["Darkness"],

	stage: "Stage1",

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	attacks: [
		{
			cost: ["Darkness"],
			name: {
				en: "Bite",
				fr: "Morsure",
				es: "Mordisco",
				it: "Morso",
				pt: "Mordida",
				de: "Biss"
			},
			damage: 30,
		},
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: {
				en: "Shadow Ball",
				fr: "Ball'Ombre",
				es: "Bola Sombra",
				it: "Palla Ombra",
				pt: "Bola de Sombra",
				de: "Spukball"
			},
			damage: 80,
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

