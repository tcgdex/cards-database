import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Gyarados GX",
		fr: "Léviator GX",
		es: "Gyarados GX",
		it: "Gyarados GX",
		pt: "Gyarados GX",
		de: "Garados GX"
	},

	illustrator: undefined,
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 230,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Dragon Rage",
				fr: "Draco-Rage",
				es: "Furia Dragón",
				it: "Ira di Drago",
				pt: "Ira do Dragão",
				de: "Drachenwut"
			},

			damage: 130,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hyper Beam GX",
				fr: "Ultralaser GX",
				es: "Hiperrayo GX",
				it: "Iper Raggio GX",
				pt: "Hiper-raio GX",
				de: "Hyperstrahl GX"
			},
			effect: {
				en: "(You can’t use more than 1 GX attack in a game.)",
				fr: "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "(No puedes usar más de 1 ataque GX en una partida).",
				it: "Non puoi usare più di un attacco GX a partita.",
				pt: "(Você não pode usar mais de 1 ataque GX por partida.)",
				de: "(Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 240,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3
}

export default card
