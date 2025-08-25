import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Frosmoth",
		fr: "Beldeneige",
		es: "Frosmoth",
		it: "Frosmoth",
		pt: "Frosmoth",
		de: "Mottineva"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Snom",
		fr: "Frissonille",
		es: "Snom",
		it: "Snom",
		pt: "Snom",
		de: "Snomnom"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ice Dance",
				fr: "Danse de Glace",
				es: "Danza Helada",
				it: "Danza del Ghiaccio",
				pt: "Dança de Gelo",
				de: "Eistanz"
			},
			effect: {
				en: "As often as you like during your turn, you may attach a Water Energy card from your hand to 1 of your Benched Water Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Water de votre main à l'un de vos Pokémon Water de Banc.",
				es: "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía Water de tu mano a 1 de tus Pokémon Water en Banca.",
				it: "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon Water in panchina una carta Energia Water dalla tua mano tutte le volte che vuoi.",
				pt: "Quantas vezes desejar durante o seu turno, você poderá ligar 1 carta de Energia Water da sua mão a 1 dos seus Pokémon Water no Banco.",
				de: "Beliebig oft während deines Zuges kannst du 1 Water-Energiekarte aus deiner Hand an 1 Water-Pokémon auf deiner Bank anlegen."
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
				en: "Aurora Beam",
				fr: "Onde Boréale",
				es: "Rayo Aurora",
				it: "Raggiaurora",
				pt: "Raio Aurora",
				de: "Aurorastrahl"
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
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	description: {
		en: "It shows no mercy to any who desecrate fields and mountains. It will fly around on its icy wings, causing a blizzard to chase offenders away."
	},

	dexId: [873],

	thirdParty: {
		cardmarket: 436454,
		tcgplayer: 208361
	}
}

export default card
