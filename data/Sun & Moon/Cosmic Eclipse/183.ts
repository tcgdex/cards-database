import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	dexId: [772],

	name: {
		en: "Type: Null",
		fr: "Type:0",
		es: "Código Cero",
		it: "Tipo Zero",
		pt: "Tipo Nulo",
		de: "Typ:Null"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Air Slash",
				fr: "Lame d’Air",
				es: "Tajo Aéreo",
				it: "Eterelama",
				pt: "Golpe de Ar",
				de: "Luftschnitt"
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
				es: "Descarta 1 Energía de este Pokémon.",
				it: "Scarta un’Energia assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia deste Pokémon.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 408539
	}
}

export default card
