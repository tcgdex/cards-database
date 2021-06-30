import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Piloswine",
		fr: "Cochignon",
		es: "Piloswine",
		it: "Piloswine",
		pt: "Piloswine",
		de: "Keifel"
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		221,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Swinub",
		fr: "Marcacrin",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Stampede",
				fr: "Ruée",
				es: "Estampida",
				it: "Fuggi Fuggi",
				pt: "Estouro",
				de: "Zertrampeln"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
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
				en: "This Pokémon is now Asleep. Heal 90 damage from it.",
				fr: "Ce Pokémon est maintenant Endormi. Soignez 90 dégâts à ce Pokémon.",
				es: "Este Pokémon pasa a estar Dormido. Cúrale 90 puntos de daño.",
				it: "Questo Pokémon viene addormentato. Curalo da 90 danni.",
				pt: "Este Pokémon agora está Adormecido. Cure 90 pontos de dano dele.",
				de: "Dieses Pokémon schläft jetzt. Heile 90 Schadenspunkte bei ihm."
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
