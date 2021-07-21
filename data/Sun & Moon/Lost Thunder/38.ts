import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Moltres",
		fr: "Sulfura",
		es: "Moltres",
		it: "Moltres",
		pt: "Moltres",
		de: "Lavados"
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		146,
	],
	hp: 120,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Assisting Heater",
				fr: "Assistant Thermique",
				es: "Caldera de Apoyo",
				it: "Termoaiuto",
				pt: "Caldeira de Apoio",
				de: "Zusatzhitze"
			},
			effect: {
				en: "You may attach a Fire Energy card from your hand to 1 of your Benched Pokémon.",
				fr: "Vous pouvez attacher une carte Énergie Fire de votre main à l’un de vos Pokémon de Banc.",
				es: "Puedes unir 1 carta de Energía Fire de tu mano a 1 de tus Pokémon en Banca.",
				it: "Puoi assegnare una carta Energia Fire dalla tua mano a uno dei tuoi Pokémon in panchina.",
				pt: "Você pode ligar 1 carta de Energia Fire da sua mão a 1 dos seus Pokémon no Banco.",
				de: "Du kannst 1 Fire-Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank anlegen."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Wing",
				fr: "Aile de Feu",
				es: "Ala Ígnea",
				it: "Alafiamma",
				pt: "Asa de Fogo",
				de: "Feuerflügel"
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
