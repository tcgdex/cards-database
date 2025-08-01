import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Sealeo",
		fr: "Phogleur",
		es: "Sealeo",
		it: "Sealeo",
		pt: "Sealeo",
		de: "Seejong"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		364,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Spheal",
		fr: "Obalie",
		es: "Spheal",
		it: "Spheal",
		pt: "Spheal",
		de: "Seemops"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rest",
				fr: "Repos",
				es: "Descanso",
				it: "Riposo",
				pt: "Descansar",
				de: "Erholung"
			},
			effect: {
				en: "Heal 60 damage from this Pokémon. This Pokémon is now Asleep.",
				fr: "Soignez 60 dégâts à ce Pokémon. Ce Pokémon est maintenant Endormi.",
				es: "Cura 60 puntos de daño a este Pokémon. Este Pokémon pasa a estar Dormido.",
				it: "Cura questo Pokémon da 60 danni. Questo Pokémon viene addormentato.",
				pt: "Cure 60 de danos deste Pokémon. Este Pokémon agora está Adormecido.",
				de: "Heile 60 Schadenspunkte bei diesem Pokémon. Dieses Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Ball",
				fr: "Ball'Glace",
				es: "Bola Hielo",
				it: "Palla Gelo",
				pt: "Bola de Gelo",
				de: "Frostbeule"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 281508
	}
}

export default card
