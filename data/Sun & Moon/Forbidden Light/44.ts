import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Espurr",
		fr: "Psystigri",
		es: "Espurr",
		it: "Espurr",
		pt: "Espurr",
		de: "Psiau"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		677,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Teaser",
				fr: "Énergie Provocante",
				es: "Señuelo Energía",
				it: "Dispetto Energetico",
				pt: "Instigador de Energia",
				de: "Energieköder"
			},
			effect: {
				en: "Move an Energy from 1 of your opponent’s Benched Pokémon to another of their Pokémon.",
				fr: "Déplacez une Énergie de l’un des Pokémon de Banc de votre adversaire vers un autre de ses Pokémon.",
				es: "Mueve 1 Energía de 1 de los Pokémon en Banca de tu rival a otro de sus Pokémon.",
				it: "Sposta un’Energia da uno dei Pokémon in panchina del tuo avversario a un altro dei suoi Pokémon.",
				pt: "Mova 1 Energia de 1 dos Pokémon no Banco do seu oponente para outro Pokémon dele(a).",
				de: "Verschiebe 1 Energie von 1 Pokémon auf der Bank deines Gegners auf 1 anderes seiner Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 355563,
		tcgplayer: 165695
	}
}

export default card
