import { Card } from "models/database/card"
import Set from "../Astral Radiance Trainer Gallery"

const card: Card = {
	dexId: [873],
	set: Set,

	name: {
		'en-us': "Frosmoth",
		'fr-fr': "Beldeneige",
		'es-es': "Frosmoth",
		'it-it': "Frosmoth",
		'pt-br': "Frosmoth",
		'de-de': "Mottineva"
	},

	illustrator: "aoki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Snom",
		'fr-fr': "Frissonille",
		'es-es': "Snom",
		'it-it': "Snom",
		'pt-br': "Snom",
		'de-de': "Snomnom"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Ice Dance",
			'fr-fr': "Danse de Glace",
			'es-es': "Danza Helada",
			'it-it': "Danza del Ghiaccio",
			'pt-br': "Dança de Gelo",
			'de-de': "Eistanz"
		},

		effect: {
			'en-us': "As often as you like during your turn, you may attach a Water Energy card from your hand to 1 of your Benched Water Pokémon.",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Water de votre main à l'un de vos Pokémon Water de Banc.",
			'es-es': "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía Water de tu mano a 1 de tus Pokémon Water en Banca.",
			'it-it': "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon Water in panchina una carta Energia Water dalla tua mano tutte le volte che vuoi.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá ligar 1 carta de Energia Water da sua mão a 1 dos seus Pokémon Water no Banco.",
			'de-de': "Beliebig oft während deines Zuges kannst du 1 Water-Energiekarte aus deiner Hand an 1 Water-Pokémon auf deiner Bank anlegen."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Aurora Beam",
			'fr-fr': "Onde Boréale",
			'es-es': "Rayo Aurora",
			'it-it': "Raggiaurora",
			'pt-br': "Raio Aurora",
			'de-de': "Aurorastrahl"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "D",


	description: {
		'en-us': "It shows no mercy to any who desecrate fields and mountains. It will fly around on its icy wings, causing a blizzard to chase offenders away.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658881,
				tcgplayer: 272475
			}
		},
	],
}

export default card
