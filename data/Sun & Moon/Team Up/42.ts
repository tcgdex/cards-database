import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Flaaffy",
		fr: "Lainergie",
		es: "Flaaffy",
		it: "Flaaffy",
		pt: "Flaaffy",
		de: "Waaty"
	},
	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		180,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Mareep",
		fr: "Wattouat",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Electric Punch",
				fr: "Poing Électrique",
				es: "Puño Eléctrico",
				it: "Pugno Elettrico",
				pt: "Murro Elétrico",
				de: "Elektroschlag"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Shock Bolt",
				fr: "Choc’Éclair",
				es: "Rayo Impacto",
				it: "Lamposhock",
				pt: "Raio de Choque",
				de: "Schock-Blitz"
			},
			effect: {
				en: "Discard all Lightning Energy from this Pokémon.",
				fr: "Défaussez toute l’Énergie Lightning de ce Pokémon.",
				es: "Descarta todas las Energías Lightning de este Pokémon.",
				it: "Scarta tutte le Energie Lightning assegnate a questo Pokémon.",
				pt: "Descarte todas as Energias Lightning deste Pokémon.",
				de: "Lege alle Lightning-Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 60,

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
	retreat: 2,



}

export default card
