import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [873],
	set: Set,

	name: {
		'fr-fr': "Beldeneige",
		'en-us': "Frosmoth",
		'es-es': "Frosmoth",
		'it-it': "Frosmoth",
		'pt-br': "Frosmoth",
		'de-de': "Mottineva"
	},

	illustrator: "Akira Komayama",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'fr-fr': "Frissonille",
		'en-us': "Snom"
	},

	abilities: [{
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
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Water de votre main à l'un de vos Pokémon Water de Banc.",
			'en-us': "As often as you like during your turn, you may attach a Water Energy card from your hand to 1 of your Benched Water Pokémon.",
			'es-es': "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía Water de tu mano a 1 de tus Pokémon Water en Banca.",
			'it-it': "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon Water in panchina una carta Energia Water dalla tua mano tutte le volte che vuoi.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá ligar 1 carta de Energia Water da sua mão a 1 dos seus Pokémon Water no Banco.",
			'de-de': "Beliebig oft während deines Zuges kannst du 1 Water-Energiekarte aus deiner Hand an 1 Water-Pokémon auf deiner Bank anlegen."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Onde Boréale",
			'en-us': "Aurora Beam",
			'es-es': "Rayo Aurora",
			'it-it': "Raggiaurora",
			'pt-br': "Raio Aurora",
			'de-de': "Aurorastrahl"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "It shows no mercy to any who desecrate fields and mountains. It will fly around on its icy wings, causing a blizzard to chase offenders away."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539558,
				tcgplayer: 232388
			}
		},
	],
}

export default card
