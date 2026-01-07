import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Raichu GX",
		fr: "Raichu GX",
		es: "Raichu GX",
		it: "Raichu GX",
		pt: "Raichu GX",
		de: "Raichu GX"
	},

	illustrator: undefined,
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 210,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunderbolt",
				fr: "Tonnerre",
				es: "Rayo",
				it: "Fulmine",
				pt: "Relâmpago",
				de: "Donnerblitz"
			},

			damage: 120,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Spark Ball GX",
				fr: "Boule Étincelles GX",
				es: "Bola Chispa GX",
				it: "Sfera Scintilla GX",
				pt: "Bola de Fagulhas GX",
				de: "Zündball GX"
			},
			effect: {
				en: "(You can’t use more than 1 GX attack in a game.)",
				fr: "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "(No puedes usar más de 1 ataque GX en una partida).",
				it: "Non puoi usare più di un attacco GX a partita.",
				pt: "(Você não pode usar mais de 1 ataque GX por partida.)",
				de: "(Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 200,

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1
}

export default card
