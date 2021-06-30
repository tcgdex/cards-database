import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Flareon",
		fr: "Pyroli",
		es: "Flareon",
		it: "Flareon",
		pt: "Flareon",
		de: "Flamara"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		136,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				es: "Mordisco",
				it: "Morso",
				pt: "Mordida",
				de: "Biss"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Spin",
				fr: "Danse Flamme",
				es: "Giro Fuego",
				it: "Turbofuoco",
				pt: "Chama Furacão",
				de: "Feuerwirbel"
			},
			effect: {
				en: "Discard 2 Fire Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies Fire de ce Pokémon.",
				es: "Descarta 2 Energías Fire de este Pokémon.",
				it: "Scarta due Energie Fire assegnate a questo Pokémon.",
				pt: "Descarte 2 Energias Fire deste Pokémon.",
				de: "Lege 2 Fire-Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
