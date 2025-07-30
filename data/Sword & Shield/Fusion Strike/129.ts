import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Drakloak",
		fr: "Dispareptil",
		es: "Drakloak",
		it: "Drakloak",
		pt: "Drakloak",
		de: "Phandra"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Dreepy",
		fr: "Fantyrm",
		es: "Dreepy",
		it: "Dreepy",
		pt: "Dreepy",
		de: "Grolldra"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "HYOGONOSUKE",

	description: {
		en: "Without a Dreepy to place on its head and care for, it gets so uneasy it'll try to substitute any Pokémon it finds for the missing Dreepy."
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant",
			de: "Spukschuss",
			es: "Disparo Embrujado",
			pt: "Tiro Assustador",
			it: "Colpomistero"
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "U-turn",
			fr: "Demi-Tour",
			de: "Kehrtwende",
			es: "Ida y Vuelta",
			pt: "Fazer Retorno",
			it: "Retromarcia"
		},

		damage: 30,

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			it: "Scambia questo Pokémon con uno della tua panchina."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582668
	}
}

export default card