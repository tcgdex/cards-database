import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Beldum",
		fr: "Terhal",
		es: "Beldum",
		it: "Beldum",
		pt: "Beldum",
		de: "Tanhel"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		374,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Core Beam",
				fr: "Faisceau Central",
				es: "Rayo Nuclear",
				it: "Raggio Nucleico",
				pt: "Feixe do Núcleo",
				de: "Kernstrahl"
			},
			effect: {
				en: "Discard a Metal Energy from this Pokémon.",
				fr: "Défaussez une Énergie Metal de ce Pokémon.",
				es: "Descarta 1 Energía Metal de este Pokémon.",
				it: "Scarta un’Energia Metal assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia Metal deste Pokémon.",
				de: "Lege 1 Metal-Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 297540,
		tcgplayer: 130995
	}
}

export default card
