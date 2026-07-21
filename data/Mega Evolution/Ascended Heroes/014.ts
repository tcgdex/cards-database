import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Cascoon",
		fr: "Blindalys",
		es: "Cascoon",
		'es-mx': "Cascoon",
		de: "Panekon",
		it: "Cascoon",
		pt: "Cascoon"
	},

	illustrator: "Dsuke",
	rarity: "Common",
	category: "Pokemon",
	dexId: [268],
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Trading Places",
			fr: "Permutation",
			es: "Cambio de Puesto",
			'es-mx': "Cambio de Lugar",
			de: "Platztausch",
			it: "Avvicendamento",
			pt: "Locais de Troca"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'es-mx': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			it: "Scambia questo Pokémon con uno nella tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco."
		}
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	description: {
		en: "Its body, which is made of soft silk, hardens over time. When cracks appear, evolution is near.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 869625,
				tcgplayer: 675826
			}
		},
		{
			type: "reverse",
			foil: "loveball",
			thirdParty: {
				cardmarket: 870158,
				tcgplayer: 676863
			}
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 870157,
				tcgplayer: 677003
			}
		},
	],
}

export default card
