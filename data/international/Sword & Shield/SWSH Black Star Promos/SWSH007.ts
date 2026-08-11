import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		'fr-fr': "Beldeneige",
		'en-us': "Frosmoth",
		'es-es': "Frosmoth",
		'it-it': "Frosmoth",
		'pt-br': "Frosmoth",
		'de-de': "Mottineva"
	},

	illustrator: "kirisAki",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Water",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'fr-fr': "Danse de Glace",
				'en-us': "Ice Dance",
				'es-es': "Danza Helada",
				'it-it': "Danza del Ghiaccio",
				'pt-br': "Dança de Gelo",
				'de-de': "Eistanz"
			},
			effect: {
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie {W} de votre main à l'un de vos Pokémon {W} de Banc.",
				'en-us': "As often as you like during your turn, you may attach a {W} Energy card from your hand to 1 of your Benched {W} Pokémon.",
				'es-es': "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía {W} de tu mano a 1 de tus Pokémon {W} en Banca.",
				'it-it': "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon {W} in panchina una carta Energia {W} dalla tua mano tutte le volte che vuoi.",
				'pt-br': "Quantas vezes desejar durante o seu turno, você poderá ligar 1 carta de Energia {W} da sua mão a 1 dos seus Pokémon {W} no Banco.",
				'de-de': "Beliebig oft während deines Zuges kannst du 1 {W}-Energiekarte aus deiner Hand an 1 {W}-Pokémon auf deiner Bank anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'fr-fr': "Onde Boréale",
				'en-us': "Aurora Beam",
				'es-es': "Rayo Aurora",
				'it-it': "Raggiaurora",
				'pt-br': "Raio Aurora",
				'de-de': "Aurorastrahl"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	evolveFrom: {
		'en-us': "Snom",
		'fr-fr': "Frissonille",
		'de-de': "Snomnom",
		'es-es': "Snom",
		'pt-br': "Snom",
		'it-it': "Snom"
	},

	description: {
		'en-us': "It shows no mercy to any who desecrate fields and mountains. It will fly around on its icy wings, causing a blizzard to chase offenders away."
	},

	dexId: [873],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 437159
	}
}

export default card
