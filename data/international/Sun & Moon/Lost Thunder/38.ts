import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Moltres",
		'fr-fr': "Sulfura",
		'es-es': "Moltres",
		'it-it': "Moltres",
		'pt-br': "Moltres",
		'de-de': "Lavados"
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
				'en-us': "Assisting Heater",
				'fr-fr': "Assistant Thermique",
				'es-es': "Caldera de Apoyo",
				'it-it': "Termoaiuto",
				'pt-br': "Caldeira de Apoio",
				'de-de': "Zusatzhitze"
			},
			effect: {
				'en-us': "You may attach a Fire Energy card from your hand to 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez attacher une carte Énergie Fire de votre main à l’un de vos Pokémon de Banc.",
				'es-es': "Puedes unir 1 carta de Energía Fire de tu mano a 1 de tus Pokémon en Banca.",
				'it-it': "Puoi assegnare una carta Energia Fire dalla tua mano a uno dei tuoi Pokémon in panchina.",
				'pt-br': "Você pode ligar 1 carta de Energia Fire da sua mão a 1 dos seus Pokémon no Banco.",
				'de-de': "Du kannst 1 Fire-Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank anlegen."
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
				'en-us': "Fire Wing",
				'fr-fr': "Aile de Feu",
				'es-es': "Ala Ígnea",
				'it-it': "Alafiamma",
				'pt-br': "Asa de Fogo",
				'de-de': "Feuerflügel"
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

	description: {
		'en-us': "One of the legendary bird Pokémon. It is said that its appearance indicates the coming of spring.",
	},

	thirdParty: {
		cardmarket: 365678,
		tcgplayer: 178841
	}
}

export default card
