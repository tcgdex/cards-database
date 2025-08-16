import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		fr: "Beldeneige",
		en: "Frosmoth",
		es: "Frosmoth",
		it: "Frosmoth",
		pt: "Frosmoth",
		de: "Mottineva"
	},

	illustrator: "kirisAki",
	rarity: "None",
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
				fr: "Danse de Glace",
				en: "Ice Dance",
				es: "Danza Helada",
				it: "Danza del Ghiaccio",
				pt: "Dança de Gelo",
				de: "Eistanz"
			},
			effect: {
				fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie {W} de votre main à l'un de vos Pokémon {W} de Banc.",
				en: "As often as you like during your turn, you may attach a {W} Energy card from your hand to 1 of your Benched {W} Pokémon.",
				es: "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía {W} de tu mano a 1 de tus Pokémon {W} en Banca.",
				it: "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon {W} in panchina una carta Energia {W} dalla tua mano tutte le volte che vuoi.",
				pt: "Quantas vezes desejar durante o seu turno, você poderá ligar 1 carta de Energia {W} da sua mão a 1 dos seus Pokémon {W} no Banco.",
				de: "Beliebig oft während deines Zuges kannst du 1 {W}-Energiekarte aus deiner Hand an 1 {W}-Pokémon auf deiner Bank anlegen."
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
				fr: "Onde Boréale",
				en: "Aurora Beam",
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

	evolveFrom: {
		en: "Snom",
		fr: "Frissonille",
		de: "Snomnom",
		es: "Snom",
		pt: "Snom",
		it: "Snom"
	},

	description: {
		en: "It shows no mercy to any who desecrate fields and mountains. It will fly around on its icy wings, causing a blizzard to chase offenders away."
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
