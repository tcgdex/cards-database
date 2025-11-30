import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Cyclizar",
		fr: "Motorizard",
		es: "Cyclizar",
		it: "Cyclizar",
		pt: "Cyclizar",
		de: "Mopex"
	},

	illustrator: "Ryota Murayama",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [967],

	hp: 100,

	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Rapid Spin",
				fr: "Tour Rapide",
				es: "Giro Rápido",
				it: "Rapigiro",
				pt: "Giro Rápido",
				de: "Turbodreher"
			},
			damage: 30,
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Scambia questo Pokémon con uno della tua panchina.",
				pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				en: "Speed Attack",
				fr: "Attaque Rapide",
				es: "Ataque Veloz",
				it: "Attacco Rapido",
				pt: "Ataque Veloz",
				de: "Tempoattacke"
			},
			damage: 70,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
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

